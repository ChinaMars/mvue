<template>
  <div class="content input-content">
    <demo-title>
      <h1 slot="title-name">Input 输入框</h1>
      <p slot="des">通过键盘输入字符</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">类似原生input常用的方法。</p>
      </demo-title>
      <template slot="code">
        <mv-input v-model="input" placeholder="请输入内容" />
        <mv-input :value="input" placeholder="请输入内容" />
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">禁用状态</h2>
      </demo-title>
      <template slot="code">
        <mv-input :disabled="true" placeholder="请输入内容" />
      </template>
      <template slot="codeStr">{{codeStr.code2}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">Input 事件用法</h2>
      </demo-title>
      <template slot="code">
        <mv-input @focus="handleFocus" placeholder="获得焦点时触发" />
        <mv-input @blur="handleBlur" placeholder="失去焦点时触发" />
        <mv-input @input="handleInput" placeholder="值改变时触发" />
      </template>
      <template slot="codeStr">{{codeStr.code3}}</template>
    </demo-block>
  </div>
</template>

<script>
import mixin from '../src/mixin'
export default {
  data() {
    return {
      input: 'apple',
      codeStr: {
        code1: `
          <mv-input v-model="input" placeholder="请输入内容" />
          <mv-input :value="input" placeholder="请输入内容" />

          <script>
            export default {
              data() {
                return {
                  input: 'apple',
                }
              }
            }
          <\/script>
        `,
        code2: `
          <mv-input :disabled="true" placeholder="请输入内容" />
        `,
        code3: `
          <mv-input @focus="handleFocus" placeholder="获得焦点时触发" />
          <mv-input @blur="handleBlur" placeholder="失去焦点时触发" />
          <mv-input @input="handleInput" placeholder="值改变时触发" />

          <script>
            export default {
              methods: {
                handleFocus(event) {
                  console.log(event, 'Input 获得焦点时触发')
                },
                handleBlur(event) {
                  console.log(event, 'Input 失去焦点时触发')
                },
                handleInput(event) {
                  console.log(event, 'Input 值改变时触发')
                }
              }
            }
          <\/script>
        `
      }
    }
  },
  mixins: [mixin],
  methods: {
    handleFocus(event) {
      console.log(event, 'Input 获得焦点时触发')
    },
    handleBlur(event) {
      console.log(event, 'Input 失去焦点时触发')
    },
    handleInput(event) {
      console.log(event, 'Input 值改变时触发')
    }
  }
}
</script>

<style lang="scss">
.input-content{
  .mv-input{
    width: 180px;
    display: inline-block;
  }
}
</style>
