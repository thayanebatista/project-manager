/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types
import type { App } from 'vue';

import { i18n } from './i18n';
// Plugins
import vuetify from '@/plugins/vuetify';
import router from '@/router/index';
import pinia from '@/store/index';

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(i18n);
}
