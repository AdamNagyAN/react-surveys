import GetAllSurveyResultsResponseDto from '../../service/results/dto/GetAllSurveysResponseDto';
import SurveyDto from '../../service/surveys/dto/SurveyDto';
import { Collapse } from 'react-daisyui';

interface ResultContainerProps {
  resultData: GetAllSurveyResultsResponseDto;
  surveyData: SurveyDto;
}

const ResultContainer = ({ resultData, surveyData }: ResultContainerProps) => {
  const { name: surveyName, content: surveyContent } = surveyData;
  const results: string[][] = resultData.data.map((result) =>
    result.content.split('\n\n').flatMap((page) => page.split('\n'))
  );
  const surveyQuestions = surveyContent
    .split('\n\n')
    .map((page) => page.split('\n').splice(1))
    .flat();
  const questionsWithAnswers = surveyQuestions.map(
    (question, questionIndex) => ({
      title: question,
      answers: results.map((result) => result[questionIndex]),
    })
  );
  console.log(questionsWithAnswers);

  return (
    <div className="container mx-auto">
      <h2 className="text-center">{surveyName}</h2>
      <div>
        {questionsWithAnswers.map((question) => (
          <Collapse
            checkbox
            className="bg-base-300 rounded-box my-4"
            key={JSON.stringify(question)}
            icon="arrow"
          >
            <Collapse.Title className="text-xl font-medium">
              {question.title}
            </Collapse.Title>
            <Collapse.Content>
              <ul className="list-disc ml-6">
                {question.answers.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            </Collapse.Content>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default ResultContainer;
