import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18n from './plugins/i18n';
import translations from './translations';

import './style.css';

import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(i18n, { translations });
app.mount('#app');
