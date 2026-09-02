import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18n from './plugins/i18n';
import mitigationTranslations from './translations/mitigation.js';
import measurementTranslations from './translations/measurement.js';
import managementTranslations from './translations/management.js';
import uiTranslations from './translations/ui.js';

import 'flag-icons/css/flag-icons.min.css';
import './style.css';

import App from './App.vue';

const translations = [
    ...mitigationTranslations,
    ...measurementTranslations,
    ...managementTranslations,
    ...uiTranslations,
];
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(i18n, { translations });
app.mount('#app');
