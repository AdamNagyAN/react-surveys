import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { GET_ALL_SURVEYS_KEY } from './useGetAllSurveys';
import surveysClient from '../../service/surveys/surveysClient';

const useDeleteSurvey = (): UseMutationResult<
  AxiosResponse<void>,
  unknown,
  { id: number }
> => {
  const queryClient = useQueryClient();
  return useMutation((request) => surveysClient.deleteOne(request.id), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_SURVEYS_KEY] });
    },
  });
};

export default useDeleteSurvey;
