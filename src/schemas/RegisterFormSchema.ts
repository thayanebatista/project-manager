import { object, string } from 'yup';
import { i18nGlobalInstance } from '@/plugins/i18n';

const { t } = i18nGlobalInstance;

export const validationRegisterSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string()
    .required()
    .min(8, t('errors.max_caracter', { max: 8 })),
  avatar: string(),
});
