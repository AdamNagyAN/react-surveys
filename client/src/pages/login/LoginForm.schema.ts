import * as yup from 'yup';
import { string } from 'yup';

export interface LoginValues {
  email: string;
  password: string;
}

export const loginSchema = (): yup.ObjectSchema<LoginValues> => {
  return yup.object({
    email: string().email().required(),
    password: string().required(),
  });
};
