import SurveyDto from './SurveyDto';

interface GetSurveysResponseDto {
  total: number;
  limit: number;
  skip: number;
  data: SurveyDto[];
}

export default GetSurveysResponseDto;
