import surveysClient from '../../service/surveys/surveysClient';
import { useQuery } from '@tanstack/react-query';

export const GET_SURVEY_BY_HASH = 'get-survey-by-hash';

const useGetAllSurveys = (hash?: string) => {
  return useQuery(
    [GET_SURVEY_BY_HASH, hash],
    () => surveysClient.getByHash(hash as string).then((res) => res.data),
    {
      enabled: !!hash,
    }
  );
};

export default useGetAllSurveys;
