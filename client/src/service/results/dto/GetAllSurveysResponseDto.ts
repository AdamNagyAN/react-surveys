import { SurveyResultDto } from './SurveyResultDto';

interface GetAllSurveyResultsResponseDto {
  total: number;
  limit: number;
  skip: number;
  data: SurveyResultDto[];
}

export default GetAllSurveyResultsResponseDto;
