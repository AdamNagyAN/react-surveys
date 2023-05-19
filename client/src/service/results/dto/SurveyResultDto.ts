export interface SurveyResultDto {
  id: number;
  content: string;
  createdAt: number;
  surveyId: number;
  survey: Survey;
}

export interface Survey {
  id: number;
  name: string;
  content: string;
  hash: string;
  createdAt: number;
  userId: number;
  user: User;
}

export interface User {
  id: number;
  email: string;
  fullname: string;
}
