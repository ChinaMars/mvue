<template>
  <div class="content button-content">
    <demo-title>
      <h1 slot="title-name">Button 按钮</h1>
      <p slot="des">常用的操作按钮。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">基础的按钮用法。</p>
      </demo-title>
      <template slot="code">
        <mv-button @click.native="handleClick">按钮</mv-button>
        <mv-button :type-style="`primary`">按钮</mv-button>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">禁用状态</h2>
        <p slot="des">按钮不可用状态。</p>
      </demo-title>
      <mv-button disabled slot="code">按钮</mv-button>
      <template slot="codeStr">{{codeStr.code2}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">图标按钮</h2>
        <p slot="des">带图标的按钮（有文字或者无文字）。</p>
      </demo-title>
      <template slot="code">
        <mv-button :icon="`icon-mv-loading`" :type-style="`primary`">加载</mv-button>
        <mv-button :icon="`icon-mv-loading`" :type-style="`primary`"></mv-button>
      </template>
      <template slot="codeStr">{{codeStr.code2}}</template>
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
          <mv-button @click.native="handleClick">按钮</mv-button>
          <mv-button :type-style="buttonStyle">按钮</mv-button>
          <script>
            export default {
              data() {
                buttonStyle: 'primary'
              },
              methods: {
                handleClick () {
                  alert('按钮点击事件')
                }
              }
            }
          <\/script>
        `,
        code2: `<mv-button disabled>按钮</mv-button>`
      }
    }
  },
  mixins: [mixin],
  methods: {
    handleClick () {
      alert('按钮点击事件')
    }
  }
}
</script>

<style lang="scss">
.button-content{
  .mv-button{
    margin-right: 10px;
  }
}
</style>
