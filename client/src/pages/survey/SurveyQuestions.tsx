import SurveyPageType from './types/SurveyPageType';
import TextField from '../../components/molecules/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { SurveyFormValues } from './SurveyForm.schema';

interface SurveyQuestionsProps {
  surveyPage: SurveyPageType;
}
const SurveyQuestions = ({ surveyPage }: SurveyQuestionsProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SurveyFormValues>();

  return (
    <>
      {surveyPage.questions.map((question, index) => (
        <Controller
          key={index}
          name={`questions.${index}`}
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                value={field.value ?? ''}
                placeholder={question}
                className="w-full"
                errorText={errors?.questions?.at(index)?.message}
              />
            );
          }}
        />
      ))}
    </>
  );
};

export default SurveyQuestions;
