import { createApp } from 'vue'
import App from './App.vue'
import Yang from './components/Yang.vue'
import Xing from './components/Xing.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        { path: '/', component:Yang  },
        { path: '/xx', component:Xing  }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
