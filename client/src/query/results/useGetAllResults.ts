import { useQuery } from '@tanstack/react-query';
import resultsClient from '../../service/results/resultsClient';

export const GET_ALL_RESULTS_KEY = 'get-all-results';

const useGetAllResults = (surveyId: number) => {
  return useQuery(
    [GET_ALL_RESULTS_KEY, surveyId],
    () => resultsClient.getAll(surveyId).then((res) => res.data),
    {
      enabled: Number.isInteger(surveyId),
    }
  );
};

export default useGetAllResults;
