import * as yup from 'yup';
import { string } from 'yup';

export interface RegisterValues {
  email: string;
  password: string;
  fullname: string;
}

export const registerSchema = (): yup.ObjectSchema<RegisterValues> => {
  return yup.object({
    fullname: string().required(),
    email: string().email().required(),
    password: string().required(),
  });
};
