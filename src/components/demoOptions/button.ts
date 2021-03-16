// button
const BUTTON_OPTION:Object = {
    name: 'button',
    title: 'Button 按钮',
    description: '按钮用于触发一个操作，如提交表单',
    option: [
        {
            name: 'primary',
            title: '基础用法',
            introduction: '',
            description: `
         通过 <code>theme</code> 属性控制按钮类型，支持 <code>default</code>、 <code>primary</code>、 <code>link</code>三种类型，默认为 <code>default</code>。
        `,
            code: `
    <x-button>default</x-button>
    <x-button theme="primary">primary</x-button>
    <x-button theme="link">link</x-button>
          `
        },
        {
            name: 'level',
            title: '按钮等级',
            introduction: '突显按钮不同的重要程度/状态',
            description: `使用 <code>level</code> 属性，结合 <code>theme</code> 属性显示不同的按钮等级，支持<code>info</code>、<code>warning</code>、<code>success</code>、<code>warning</code>四种等级`,
            code: `
    <div class="button-line">
      <x-button level="info">信息</x-button>
      <x-button level="warning">警告</x-button>
      <x-button level="danger">危险</x-button>
      <x-button level="success">成功</x-button>
    </div>
    <div class="button-line">
      <x-button level="info" theme="primary">信息</x-button>
      <x-button level="warning" theme="primary">警告</x-button>
      <x-button level="danger" theme="primary">危险</x-button>
      <x-button level="success" theme="primary">成功</x-button>
    </div>
    <div>
      <x-button level="info" theme="link">信息</x-button>
      <x-button level="warning" theme="link">警告</x-button>
      <x-button level="danger" theme="link">危险</x-button>
      <x-button level="success" theme="link">成功</x-button>
    </div>
          `
        },
        {
            name: 'size',
            title: '按钮尺寸',
            introduction: '',
            description: `使用 <code>size</code> 属性改变按钮大小，支持<code>mini</code>、<code>small</code>、<code>normal</code>、<code>large</code>四种尺寸，默认为 <code>normal</code> `,
            code: `
    <x-button size="mini">迷你按钮</x-button>
    <x-button size="small">小型按钮</x-button>
    <x-button>普通按钮</x-button>
    <x-button size="large">大号按钮</x-button>
          `
        },
        {
            name: 'disabled',
            title: '禁用状态',
            introduction: '',
            description: `使用 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击 `,
            code: `
    <x-button disabled>禁用状态</x-button>
    <x-button disabled theme="primary">禁用状态</x-button>
    <x-button disabled theme="link">禁用状态</x-button>
          `
        },
        {
            name: 'loading',
            title: '加载状态',
            introduction: '',
            description: `使用 <code>loading</code> 属性表示加载中的按钮 `,
            code: `
    <x-button loading>加载中...</x-button>
          `
        }
    ]
}

export default BUTTON_OPTION
