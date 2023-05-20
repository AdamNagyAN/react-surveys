import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import GetSurveysResponseDto from './dto/GetSurveysResponseDto';
import SurveyDto from './dto/SurveyDto';
import CreateSurveyDto from '../auth/dto/CreateSurveyDto';

const getAll = (): AxiosPromise<GetSurveysResponseDto> => {
  return axiosBase.get('/surveys');
};

const getAllWithLimits = (
  skip: number,
  limit: number
): AxiosPromise<GetSurveysResponseDto> => {
  return axiosBase.get(`/surveys?$skip=${skip}&$limit=${limit}`);
};

const getByHash = (hash: string): AxiosPromise<GetSurveysResponseDto> => {
  return axiosBase.get(`/surveys?hash${hash}`);
};

const getOne = (id: number): AxiosPromise<SurveyDto> => {
  return axiosBase.get(`/surveys/${id}`);
};

const create = (request: CreateSurveyDto): AxiosPromise<SurveyDto> => {
  return axiosBase.post('/surveys', request);
};

const modify = (
  id: number,
  request: Partial<CreateSurveyDto>
): AxiosPromise<SurveyDto> => {
  return axiosBase.patch(`/surveys/${id}`, request);
};

const deleteOne = (id: number): AxiosPromise<void> => {
  return axiosBase.delete(`/surveys/${id}`);
};

const surveysClient = {
  getAll,
  getAllWithLimits,
  getByHash,
  getOne,
  create,
  modify,
  deleteOne,
};

export default surveysClient;
