import * as yup from 'yup';

export interface SurveyFormValues {
  questions: string[];
}

export const surveyFormSchema = (): yup.ObjectSchema<SurveyFormValues> => {
  return yup.object({
    questions: yup
      .array()
      .of(yup.string().required('This field is required!'))
      .required(),
  });
};
