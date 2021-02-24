import './index.scss'
import './assets/css/xing-ui-v3.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/svg.js'
const app = createApp(App)
app.use(router)
app.mount('#app')
