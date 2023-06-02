import { Steps } from 'react-daisyui';
import SurveyDto from '../../service/surveys/dto/SurveyDto';
import SurveyPageType from './types/SurveyPageType';
import { useState } from 'react';
import SurveyPagesForm from './SurveyPagesForm';

interface SurveyContainerProps {
  survey: SurveyDto;
}

const SurveyContainer = ({ survey }: SurveyContainerProps) => {
  const { name, content } = survey;
  const splitContent = content.split('\n\n');
  const surveyPages: SurveyPageType[] = splitContent.map((page, index) => ({
    id: index,
    title: page.split('\n')[0],
    questions: page.split('\n').slice(1),
  }));
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [surveyFormValues, setSurveyFormValues] = useState<SurveyPageType[]>([
    ...surveyPages.map((page) => ({
      title: page.title,
      id: page.id,
      questions: page.questions.map(() => ''),
    })),
  ]);

  return (
    <div className="container text-center mx-auto mt-4">
      <h2>{name}</h2>
      <Steps className="mb-4">
        {surveyPages.map((_page, index) => {
          const getColor = (() => {
            if (index < selectedPageIndex) return 'primary';
            if (index === selectedPageIndex) return 'info';
            return 'neutral';
          })();

          return (
            <Steps.Step
              value={String(index + 1)}
              key={index}
              color={getColor}
            />
          );
        })}
      </Steps>
      <SurveyPagesForm
        key={selectedPageIndex}
        surveyPages={surveyPages}
        selectedPageIndex={selectedPageIndex}
        setSelectedPageIndex={setSelectedPageIndex}
        surveyFormValues={surveyFormValues}
        setSurveyFormValues={setSurveyFormValues}
      />
    </div>
  );
};

export default SurveyContainer;
