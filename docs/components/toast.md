---
title: Toast 提示框
---

<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

### Toast 属性

| 参数       | 说明                           | 类型      | 可选值          | 默认值   |
|----------|------------------------------|---------|--------------|-------|
| visible  | 是否显示                         | boolean | false / true | false |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | number  | —            | 1500  |
| message  | 文本内容                         | string  | —            | —     |

### Toast 方法
调用 `Toast` 或 `this.$toast` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `clear` 方法。

| 方法名          | 说明   |
|--------------|------|
| clear | 关闭提示 |

