import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './assets/styles/main.css';
import router from './router'
import axios from 'axios';

// Set up axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const app = createApp(App);

// Initialize Pinia
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');
