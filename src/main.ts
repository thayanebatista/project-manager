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
