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
import { GET_SURVEY_BY_ID } from './useGetSurveyById';

const useModifySurvey = (
  id: number
): UseMutationResult<AxiosResponse<SurveyDto>, unknown, CreateSurveyDto> => {
  const queryClient = useQueryClient();
  return useMutation((request) => surveysClient.modify(id, request), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ALL_SURVEYS_KEY, GET_SURVEY_BY_ID],
      });
    },
  });
};

export default useModifySurvey;
