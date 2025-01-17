/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import App from './App.vue';

import { createApp } from 'vue';
import { setLocale } from 'yup';
import { ptShort } from 'yup-locale-pt';
import { registerPlugins } from '@/plugins';

import '@fontsource/encode-sans-expanded/100.css';
import '@fontsource/encode-sans-expanded/200.css';
import '@fontsource/encode-sans-expanded/300.css';
import '@fontsource/encode-sans-expanded/400.css';
import '@fontsource/encode-sans-expanded/500.css';
import '@fontsource/encode-sans-expanded/600.css';
import '@fontsource/encode-sans-expanded/700.css';
import '@fontsource/encode-sans-expanded/800.css';
import '@fontsource/encode-sans-expanded/900.css';

/*
  yup documentation:
  https://github.com/jquense/yup

  yup locale documentation:
  https://github.com/arfurlaneto/yup-locale-pt
*/

setLocale({
  ...ptShort,
});

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
