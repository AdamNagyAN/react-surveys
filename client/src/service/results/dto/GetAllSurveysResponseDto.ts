import { SurveyResultDto } from './SurveyResultDto';

interface GetAllSurveysResponseDto {
  total: number;
  limit: number;
  skip: number;
  data: SurveyResultDto[];
}

export default GetAllSurveysResponseDto;
