import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import DocDemo from '../components/DocDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import DialogDemo from '../components/DialogDemo.vue'
import Markdown from '../components/common/Markdown.vue'
import { h } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const md = fileName => h(Markdown, { path:`../../markdown/${fileName}.md`,key:fileName })
export const router = createRouter({
    history,
    routes:[
        { path: '/', component:Home  },
        {
            path: '/doc',
            component:Doc,
            children: [
                { path: '', component:DocDemo },
                { path: 'intro', component: md('intro')  },
                { path: "get-started", component: md('get-started') },
                { path: "install", component: md('install') },
                { path: 'switch', component:SwitchDemo },
                { path: 'button', component:ButtonDemo },
                { path: 'dialog', component:DialogDemo },
                { path: 'tabs', component:TabsDemo }
            ]
        }
    ]
})
