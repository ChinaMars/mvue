<template>
  <div class="content icon-content">
    <demo-title>
      <h1 slot="title-name">Icon 图标</h1>
      <p slot="des">目前只提供了一些制作 UI 时碰到的图标。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">直接通过设置类名为 mv-iconName 来使用即可，还可以自定义 iconName 通过样式控制。</p>
      </demo-title>
      <template slot="code">
        <mv-icon name="mv-loading" />
        <mv-icon name="mv-close" />
        <mv-icon name="mv-arrow-down" />
        <mv-icon name="mv-arrow-up" />
        <mv-icon name="mv-arrow-left" />
        <mv-icon name="mv-arrow-right" />
        <mv-icon name="mv-selected" />
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
  </div>
</template>

<script>
import mixin from '../src/mixin'
export default {
  data() {
    return {
      codeStr: {
        code1: `
          <mv-icon name="mv-loading" />
          <mv-icon name="mv-close" />
          <mv-icon name="mv-arrow-down" />
          <mv-icon name="mv-arrow-up" />
          <mv-icon name="mv-arrow-left" />
          <mv-icon name="mv-arrow-right" />
        `
      }
    }
  },
  mixins: [mixin]
}
</script>

<style lang="scss">
.icon-content{
  .source{
    .icon{
      font-size: 24px;
    }
  }
}
</style>
