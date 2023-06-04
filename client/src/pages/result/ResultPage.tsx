import AppBar from '../../components/organisms/appbar/AppBar';
import useGetAllResults from '../../query/results/useGetAllResults';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';
import ResultContainer from './ResultContainer';
import useGetSurveyById from '../../query/surveys/useGetSurveyById';

const ResultPage = () => {
  const params = useParams<{ surveyId: string }>();
  const surveyId = Number(params.surveyId);
  const { data: resultData, isLoading: isResultsLoading } =
    useGetAllResults(surveyId);
  const { data: surveyData, isLoading: isSurveyLoading } =
    useGetSurveyById(surveyId);
  return (
    <>
      <AppBar />
      {!resultData || !surveyData || isResultsLoading || isSurveyLoading ? (
        <LoadingSpinner />
      ) : (
        <ResultContainer resultData={resultData} surveyData={surveyData} />
      )}
    </>
  );
};

export default ResultPage;
