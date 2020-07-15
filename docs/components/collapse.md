---
title: Collapse 折叠板
---

<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>

### Collapse 属性

| 参数            | 说明      | 类型             | 可选值               | 默认值     |
|---------------|---------|----------------|-------------------|---------|
| v-model      | 当前激活的面板 | string / array | —                 | —       |

### Collapse Item 属性

| 参数            | 说明    | 类型             | 可选值               | 默认值     |
|---------------|-------|----------------|-------------------|---------|
| value         | 唯一标志符 | string / array | —                 | —       |
| title         | 面板标题  | string         | —                 | —       |

### collapse Slots

| slot 名 | 说明                  |
|--------|---------------------|
| —      | Collapse Item 的内容          |
| title  | Collapse Item 的标题          |