import axiosBase from '../axiosBase';
import { AxiosPromise } from 'axios';
import { SurveyResultDto } from './dto/SurveyResultDto';
import GetAllSurveysResponseDto from './dto/GetAllSurveysResponseDto';
import CreateResultRequestDto from './dto/CreateResultRequestDto';
import ModifyResultRequestDto from './dto/ModifyResultRequestDto';

const getAll = (resultId: number): AxiosPromise<GetAllSurveysResponseDto> => {
  return axiosBase.get('/results', { params: { resultId } });
};

const getOne = (id: number): AxiosPromise<SurveyResultDto> => {
  return axiosBase.get(`/results/${id}`);
};

const create = (
  request: CreateResultRequestDto
): AxiosPromise<SurveyResultDto> => {
  return axiosBase.post(`/results`, request);
};

const modify = (
  id: number,
  request: ModifyResultRequestDto
): AxiosPromise<SurveyResultDto> => {
  return axiosBase.patch(`/results/${id}`, request);
};

const deleteById = (id: number): AxiosPromise<void> => {
  return axiosBase.delete(`/results/${id}`);
};

const resultsClient = {
  getAll,
  getOne,
  create,
  modify,
  deleteById,
};

export default resultsClient;
