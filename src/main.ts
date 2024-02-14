import { createApp } from 'vue'
import App from '@/App.vue'
import 'normalize.css'
import '@/assets/css/vars.less'
import '@/assets/css/index.less'
import router from './router'
import 'virtual:svg-icons-register'
import globalComponent from './shared/index'

// import "@/service/modules/test"

const app = createApp(App)
app.use(router)
app.use(globalComponent)
app.mount('#app')
