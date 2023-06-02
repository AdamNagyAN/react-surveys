import surveysClient from '../../service/surveys/surveysClient';
import { useQuery } from '@tanstack/react-query';

export const GET_ALL_SURVEYS_KEY = 'get-all-surveys';

const useGetAllSurveys = (skip?: number, limit?: number) => {
  return useQuery([GET_ALL_SURVEYS_KEY, skip, limit], () =>
    surveysClient.getAllWithLimits(skip, limit).then((res) => res.data)
  );
};

export default useGetAllSurveys;
