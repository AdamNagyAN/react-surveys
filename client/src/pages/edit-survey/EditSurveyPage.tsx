import { useParams } from 'react-router-dom';
import AppBar from '../../components/organisms/appbar/AppBar';
import EditSurveyContainer from './EditSurveyContainer';
import useGetSurveyById from '../../query/surveys/useGetSurveyById';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';

const EditSurveyPage = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data, isLoading, isRefetching } = useGetSurveyById(id);

  return (
    <>
      <AppBar />
      {Number.isInteger(id) && (isRefetching || isLoading || !data) ? (
        <LoadingSpinner />
      ) : (
        <EditSurveyContainer key={id ?? 'new'} id={id} data={data} />
      )}
    </>
  );
};

export default EditSurveyPage;
