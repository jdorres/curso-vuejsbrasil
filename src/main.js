import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'animate.css'
import '@/assets/css/tailwindOutput.css'
import '@/assets/css/fonts.css'
import './assets/tailwind.css'


createApp(App)
  .use(router)
  .mount('#app');
