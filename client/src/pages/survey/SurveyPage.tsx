import AppBar from '../../components/organisms/appbar/AppBar';
import SurveyContainer from './SurveyContainer';
import { useParams } from 'react-router-dom';
import useGetSurveyByHash from '../../query/surveys/useGetSurveyByHash';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';

const SurveyPage = () => {
  const { hash } = useParams<{ hash: string }>();
  const { data, isLoading } = useGetSurveyByHash(hash);

  return (
    <>
      <AppBar />
      {!data || isLoading ? (
        <LoadingSpinner />
      ) : (
        <SurveyContainer survey={data.data[0]} />
      )}
    </>
  );
};

export default SurveyPage;
