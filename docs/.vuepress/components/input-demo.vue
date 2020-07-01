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
        input: 'apple',
        codeStr: {
          code1: `
            <mv-input v-model="input" placeholder="请输入内容" />

            <script>
              export default {
                data() {
                  return {
                    input: 'apple',
                  }
                }
              }
            <\/script>
          `
        }
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="scss">

</style>
