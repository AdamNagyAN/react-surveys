import React from 'react';
import SurveyQuestions from './SurveyQuestions';
import { Button } from 'react-daisyui';
import SurveyPageType from './types/SurveyPageType';
import { surveyFormSchema, SurveyFormValues } from './SurveyForm.schema';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface SurveyPagesFormProps {
  surveyPages: SurveyPageType[];
  selectedPageIndex: number;
  setSelectedPageIndex: React.Dispatch<React.SetStateAction<number>>;
  surveyFormValues: SurveyPageType[];
  setSurveyFormValues: React.Dispatch<React.SetStateAction<SurveyPageType[]>>;
}

const SurveyPagesForm = ({
  surveyPages,
  setSelectedPageIndex,
  selectedPageIndex,
  surveyFormValues,
  setSurveyFormValues,
}: SurveyPagesFormProps) => {
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

  const onSubmit = (formData: SurveyFormValues) => {
    const pageResult: SurveyPageType = {
      ...selectedPage,
      questions: formData.questions,
    };
    setSurveyFormValues([
      ...surveyFormValues.map((page) => {
        if (page.id === selectedPageIndex) return pageResult;
        return page;
      }),
    ]);
    if (hasNextPage) {
      setSelectedPageIndex((prev) => prev + 1);
    }
    // TODO: Save results
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
            {hasFinish && <Button type="submit">Finish</Button>}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SurveyPagesForm;
