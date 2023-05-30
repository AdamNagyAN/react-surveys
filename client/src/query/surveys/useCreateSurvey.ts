import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { GET_ALL_SURVEYS_KEY } from './useGetAllSurveys';
import surveysClient from '../../service/surveys/surveysClient';
import SurveyDto from '../../service/surveys/dto/SurveyDto';
import CreateSurveyDto from '../../service/surveys/dto/CreateSurveyDto';

const useDeleteSurvey = (): UseMutationResult<
  AxiosResponse<SurveyDto>,
  unknown,
  CreateSurveyDto
> => {
  const queryClient = useQueryClient();
  return useMutation((request) => surveysClient.create(request), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_SURVEYS_KEY] });
    },
  });
};

export default useDeleteSurvey;
