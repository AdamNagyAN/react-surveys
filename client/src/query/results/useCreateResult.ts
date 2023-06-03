import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import resultsClient from '../../service/results/resultsClient';
import CreateResultRequestDto from '../../service/results/dto/CreateResultRequestDto';
import { SurveyResultDto } from '../../service/results/dto/SurveyResultDto';
import { GET_ALL_RESULTS_KEY } from './useGetAllResults';

const useDeleteSurvey = (): UseMutationResult<
  AxiosResponse<SurveyResultDto>,
  unknown,
  CreateResultRequestDto
> => {
  const queryClient = useQueryClient();
  return useMutation((request) => resultsClient.create(request), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_RESULTS_KEY] });
    },
  });
};

export default useDeleteSurvey;
