import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

createApp(App).mount('#app')
console.log(import.meta.env.VITE_APP_WEB_URL)

const info = {
  name: 'Yier',
  age: 19,
  school: 'jxa',
  gota: 'pqx'
}

console.log(info)
