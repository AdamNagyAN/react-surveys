import React from 'react';
import SurveyQuestions from './SurveyQuestions';
import { Button } from 'react-daisyui';
import SurveyPageType from './types/SurveyPageType';
import { surveyFormSchema, SurveyFormValues } from './SurveyForm.schema';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useCreateResult from '../../query/results/useCreateResult';
import SurveyDto from '../../service/surveys/dto/SurveyDto';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import { useToastBar } from '../../components/molecules/toast/ToastBarProvider';

interface SurveyPagesFormProps {
  survey: SurveyDto;
  surveyPages: SurveyPageType[];
  selectedPageIndex: number;
  setSelectedPageIndex: React.Dispatch<React.SetStateAction<number>>;
  surveyFormValues: SurveyPageType[];
  setSurveyFormValues: React.Dispatch<React.SetStateAction<SurveyPageType[]>>;
}

const SurveyPagesForm = ({
  survey,
  surveyPages,
  setSelectedPageIndex,
  selectedPageIndex,
  surveyFormValues,
  setSurveyFormValues,
}: SurveyPagesFormProps) => {
  const navigate = useNavigate();
  const toastBar = useToastBar();
  const { mutateAsync: createResult, isLoading: isCreateResultLoading } =
    useCreateResult();
  const selectedPage = surveyPages[selectedPageIndex];
  const formMethods = useForm<SurveyFormValues>({
    resolver: yupResolver(surveyFormSchema()),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      questions: surveyFormValues[selectedPageIndex].questions,
    },
  });
  const hasPreviousPage = selectedPageIndex > 0;
  const hasNextPage = selectedPageIndex < surveyPages.length - 1;
  const hasFinish = selectedPageIndex === surveyPages.length - 1;

  const onPrev = () => {
    setSelectedPageIndex((prev) => prev - 1);
  };

  const onSubmit = async (formData: SurveyFormValues) => {
    const pageResult: SurveyPageType = {
      ...selectedPage,
      questions: formData.questions,
    };
    const newSurveyFormValue: SurveyPageType[] = [
      ...surveyFormValues.map((page) => {
        if (page.id === selectedPageIndex) return pageResult;
        return page;
      }),
    ];
    setSurveyFormValues(newSurveyFormValue);
    if (hasNextPage) {
      setSelectedPageIndex((prev) => prev + 1);
    }
    if (hasFinish) {
      await createResult({
        surveyId: survey.id,
        content: newSurveyFormValue
          .map((page) => page.questions.join('\n'))
          .join('\n\n'),
      });
      navigate(ROUTES.HOME);
      toastBar({
        type: 'success',
        message: 'Survey completed successfully!',
        title: 'Success',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <SurveyQuestions surveyPage={surveyPages[selectedPageIndex]} />
          <div className="flex justify-between mt-4">
            {hasPreviousPage ? (
              <Button type="button" onClick={onPrev}>
                Previous
              </Button>
            ) : (
              <div />
            )}
            {hasNextPage && <Button type="submit">Next</Button>}
            {hasFinish && (
              <Button type="submit" loading={isCreateResultLoading}>
                Finish
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SurveyPagesForm;
