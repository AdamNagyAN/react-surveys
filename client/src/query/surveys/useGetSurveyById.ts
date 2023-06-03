import surveysClient from '../../service/surveys/surveysClient';
import { useQuery } from '@tanstack/react-query';

export const GET_SURVEY_BY_ID = 'get-survey-by-id';

const useGetSurveyById = (id?: number) => {
  return useQuery(
    [GET_SURVEY_BY_ID, id],
    () => surveysClient.getOne(id as number).then((res) => res.data),
    { enabled: Number.isInteger(id) }
  );
};

export default useGetSurveyById;
