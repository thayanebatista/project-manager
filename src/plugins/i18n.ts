import ptBR from '@/locales/pt-BR.json';

import { createI18n } from 'vue-i18n';

type MessageSchema = typeof ptBR;

export const i18n = createI18n<[MessageSchema], 'pt-BR'>({
  locale: import.meta.env.VITE_APP_I18N_LOCALE || 'pt-BR',
  legacy: false,
  messages: {
    'pt-BR': ptBR,
  },
  numberFormats: {
    'pt-BR': {
      currency: {
        style: 'currency',
        currency: 'BRL',
        notation: 'standard',
      },
    },
  },
});

export const i18nGlobalInstance = i18n.global;
