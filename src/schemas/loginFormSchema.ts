import { object, string } from 'yup';

export interface ILoginSchema {
  email: string;
  password: string;
}

export const loginFormValidationSchema = object<ILoginSchema>({
  email: string().required().email(),
  password: string().required(),
});
