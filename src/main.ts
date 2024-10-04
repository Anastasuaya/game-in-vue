import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import kaboom from 'kaboom'

createApp(App).mount('#app')
App.use( kaboom )