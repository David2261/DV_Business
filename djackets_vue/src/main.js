import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

/*
Неоднократно при создании веб-приложения вам может понадобиться получать и отображать данные из API.
Существует несколько способов сделать это, но наиболее популярным решением является использование axios,
основанного на Promise HTTP-клиента.
 */
createApp(App).use(store).use(router, axios).mount('#app')
