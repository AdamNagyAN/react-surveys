import AppBar from '../../components/organisms/appbar/AppBar';
import useGetAllSurveys from '../../query/surveys/useGetAllSurveys';
import MySurveysContainer from './MySurveysContainer';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';

const MySurveysPage = () => {
  const { data, isLoading } = useGetAllSurveys(0, 10);

  return (
    <>
      <AppBar />
      {isLoading || !data ? (
        <LoadingSpinner />
      ) : (
        <MySurveysContainer data={data} />
      )}
    </>
  );
};

export default MySurveysPage;
