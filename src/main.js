import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { notification } from '@/utils/notification'

const app = createApp(App)

app.config.globalProperties.$notification = notification

app.use(router)
app.use(store)
app.mount('#app')
