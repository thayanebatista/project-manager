import { mixed, object, string } from 'yup';
import { formatDate, isValid, parseISO } from 'date-fns';
import { i18nGlobalInstance } from '@/plugins/i18n';

export const newProjectSchema = object({
  name: string()
    .required()
    .test(
      'validate-two-words',
      i18nGlobalInstance.t('errors.atLeastTwoWords'),
      value => value?.trim().split(/\s+/).length >= 2,
    ),
  client: string().required(i18nGlobalInstance.t('errors.atLeastOneWord')),
  startDate: string()
    .required()
    .test(
      'validate-date-format',
      i18nGlobalInstance.t('errors.invalidDate'),
      value => {
        if (!value) return false;
        const parsedDate = parseISO(formatDate(value, 'yyyy-MM-dd'));
        return isValid(parsedDate);
      },
    ),
  endDate: string()
    .required()
    .test(
      'validate-date-format',
      i18nGlobalInstance.t('errors.invalidDate'),
      value => {
        if (!value) return false;
        const parsedDate = parseISO(formatDate(value, 'yyyy-MM-dd'));
        return isValid(parsedDate);
      },
    )
    .test(
      'validate-end-after-start',
      i18nGlobalInstance.t('errors.invalidDate'),
      function (value) {
        const { startDate } = this.parent;
        if (!value || !startDate) return true;
        const start = parseISO(formatDate(startDate, 'yyyy-MM-dd'));
        const end = parseISO(formatDate(value, 'yyyy-MM-dd'));
        return isValid(start) && isValid(end) && end >= start;
      },
    ),
  image: mixed().optional().nullable(),
});
