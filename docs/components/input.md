---
title: Input 输入框
---

<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

### Input Attributes

| 参数               | 说明  | 类型              | 可选值                                 | 默认值  |
|------------------|-----|-----------------|-------------------------------------|------|
| type             | 类型  | string          | [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v\-model | 绑定值 | string / number | —                                   | —    |

### Input Events

| 事件名称  | 说明              | 回调参数             |
|-------|-----------------|------------------|
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| input | 在 Input 值改变时触发  | (event: Event) |
| blur  | 在 Input 失去焦点时触发 | (event: Event) |
