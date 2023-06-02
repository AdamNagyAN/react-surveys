import { useState } from 'react';
import AppBar from '../../components/organisms/appbar/AppBar';
import useGetAllSurveys from '../../query/surveys/useGetAllSurveys';
import MySurveysContainer from './MySurveysContainer';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';

export const PAGE_SIZE = 5;

const MySurveysPage = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetAllSurveys(page * PAGE_SIZE, PAGE_SIZE);

  return (
    <>
      <AppBar />
      {isLoading || !data ? (
        <LoadingSpinner />
      ) : (
        <MySurveysContainer data={data} page={page} setPage={setPage} />
      )}
    </>
  );
};

export default MySurveysPage;
