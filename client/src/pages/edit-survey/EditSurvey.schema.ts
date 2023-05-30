import * as yup from 'yup';

export interface EditSurveyValues {
  content: string;
}

export const editSurveySchema = (): yup.ObjectSchema<EditSurveyValues> =>
  yup.object({
    content: yup
      .string()
      .test('content', 'Invalid content', (value) => {
        if (!value) {
          return false;
        }

        const lines = value.split('\n');
        if (lines.length < 3) {
          return false;
        }

        const title = lines[0];
        if (!title.trim()) {
          return false;
        }

        let currentLine = 1;
        while (currentLine < lines.length) {
          if (lines[currentLine].trim() !== '') {
            return false;
          }
          currentLine++;

          const pageName = lines[currentLine].trim();
          if (!pageName) {
            return false;
          }
          currentLine++;

          let hasQuestions = false;
          while (
            currentLine < lines.length &&
            lines[currentLine].trim() !== ''
          ) {
            if (lines[currentLine].trim()) {
              hasQuestions = true;
            }
            currentLine++;
          }
          if (!hasQuestions) {
            return false;
          }
        }

        return true;
      })
      .required(),
  });
