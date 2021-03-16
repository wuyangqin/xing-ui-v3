const HOME_FEATURES:Array<object> = [
    {
        icon: 'vue',
        title:'基于 Vue 3',
        description: '使用了 Vue 3 Composition API',
    },
    {
        icon: 'typescript',
        title:'基于 TypeScript',
        description: '源代码采用 TypeScript 书写',
    },
    {
        icon: '1024',
        title:'代码易读',
        description: '每个组件的源代码都极其简洁',
    }
]

const DOC_ROUTERS:Array<object> = [
    {
        title: '文档',
        router:[
            { url:'/doc/intro',title:'介绍' },
            { url:'/doc/install',title:'安装' },
            { url:'/doc/get-started',title:'开始使用' }
        ]
    },
    {
        title: '组件列表',
        router:[
            { url:'/doc/switch',title:'Switch 开关' },
            { url:'/doc/button',title:'Button 按钮' },
            { url:'/doc/dialog',title:'Dialog 对话框' },
            { url:'/doc/tabs',title:'Tabs 标签页' }
        ]
    }
]

export {
    HOME_FEATURES,
    DOC_ROUTERS
}
