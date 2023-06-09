import { AxiosPromise } from 'axios';
import axiosBase from '../axiosBase';
import GetSurveysResponseDto from './dto/GetSurveysResponseDto';
import SurveyDto from './dto/SurveyDto';
import CreateSurveyDto from './dto/CreateSurveyDto';
import HEADERS from '../Headers';

const getAllWithLimits = (
  userId?: number,
  accessToken?: string,
  skip?: number,
  limit?: number
): AxiosPromise<GetSurveysResponseDto> => {
  return axiosBase.get(`/surveys`, {
    params: { $skip: skip, $limit: limit, userId },
    headers: {
      [HEADERS.AUTHORIZATION]: accessToken ? `Bearer ${accessToken}` : null,
    },
  });
};

const getByHash = (hash: string): AxiosPromise<GetSurveysResponseDto> => {
  return axiosBase.get(`/surveys`, {
    params: { hash },
  });
};

const getOne = (id: number): AxiosPromise<SurveyDto> => {
  return axiosBase.get(`/surveys/${id}`);
};

const create = (request: CreateSurveyDto): AxiosPromise<SurveyDto> => {
  return axiosBase.post('/surveys', request);
};

const modify = (
  id: number,
  request: CreateSurveyDto
): AxiosPromise<SurveyDto> => {
  return axiosBase.patch(`/surveys/${id}`, request);
};

const deleteOne = (id: number): AxiosPromise<void> => {
  return axiosBase.delete(`/surveys/${id}`);
};

const surveysClient = {
  getAllWithLimits,
  getByHash,
  getOne,
  create,
  modify,
  deleteOne,
};

export default surveysClient;
