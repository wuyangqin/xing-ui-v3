import XDialog from '../Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = ({
    title = '',
    content = '',
    onConfirm = () => {},
    onCancel = () => {},
    closeOnClickOverlay = true
}) => {
    const div =  document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(
                XDialog,
                {
                    visible: true,
                    title,
                    content,
                    onConfirm,
                    onCancel,
                    closeOnClickOverlay,
                    'onUpdate:visible':(newVisible) => {
                        if (!newVisible) {
                            close()
                        }
                    }
                }
            )
        }
    })
    app.mount(div)
}
