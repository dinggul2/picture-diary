import { createApp } from 'vue'
import VCalendar from 'v-calendar'
import App from './App.vue'
import router from './router'
import store from './store'
import setupInterceptors from './services/axios.interceptors'


setupInterceptors(store)

createApp(App)
  .use(router)
  .use(store)
  .use(VCalendar, {})
  .mount('#app')
