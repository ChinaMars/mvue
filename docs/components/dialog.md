---
title: Dialog 对话框
---

<ClientOnly>
  <dialog-demo></dialog-demo>
</ClientOnly>

### Dialog 属性

| 参数              | 说明                          | 类型      | 可选值           | 默认值   |
|-----------------|-----------------------------|---------|---------------|-------|
| visible         | 是否显示 Dialog，支持 \.sync 修饰符 | boolean | —             | false |
| title           | Dialog的标题                   | string  | —             | —     |
| position        | Dialog的显示位置                 | string  | auto / center | auto  |
| width           | Dialog的宽度                   | string  | —             | 30%   |
| close\-by\-mask | Dialog是否通过遮罩层关闭             | boolean | true / false  | true  |
| z\-index        | Dialog自定义层级                 | number  | —             | 1001  |

### Dialog Slots

| slot 名 | 说明                  |
|--------|---------------------|
| —      | Dialog 的内容          |
| title  | Dialog 的标题          |
| footer | Dialog 的底部内容，一般显示按钮 |

### Dialog 事件

| 事件名称  | 说明           | 回调参数 |
|-------|--------------|------|
| close | Dialog 关闭的回调 | —    |

