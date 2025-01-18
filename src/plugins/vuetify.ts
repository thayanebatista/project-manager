/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles';
import '@/styles/settings.scss';
import '@mdi/font/css/materialdesignicons.css';
// Composables
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { VDateInput } from 'vuetify/labs/VDateInput';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#695CCD',
          background: '#F8F4F4',
          'app-bar-background': '#1C1930',
          'button-background': '#695CCD',
          'no-project-title': '#1F1283',
          'new-project-border': '#DCDCDC',
          'imput-label': '#695CCD',
          'required-field': '#717171',
          title: '#1F1283',
          toggle: '#FFB23D',
          'card-title': '#717171',
          'card-subtitle': '#717171',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components: {
    VDateInput,
  },
  date: {
    locale: {
      en: 'pt',
    },
  },
});
