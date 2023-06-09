import surveysClient from '../../service/surveys/surveysClient';
import { useQuery } from '@tanstack/react-query';
import userLocalStorage from '../../utils/userLocalStorage';

export const GET_ALL_SURVEYS_KEY = 'get-all-surveys';

const useGetAllSurveys = (skip?: number, limit?: number) => {
  const user = userLocalStorage.getUser();
  console.log({ user });
  return useQuery(
    [GET_ALL_SURVEYS_KEY, user, skip, limit],
    () =>
      surveysClient
        .getAllWithLimits(user?.user.id, user?.accessToken, skip, limit)
        .then((res) => res.data),
    { enabled: !!user?.accessToken }
  );
};

export default useGetAllSurveys;
