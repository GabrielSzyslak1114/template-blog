import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './scss/_app.scss';

                  
createApp(App)
    .use( createPinia() )
    .use( router )
    .mount('#app')
