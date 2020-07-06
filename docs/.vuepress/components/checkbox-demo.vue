<template>
  <div class="content button-content">
    <demo-title>
      <h1 slot="title-name">Checkbox 复选框</h1>
      <p slot="des">表单中的一个选择框。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
      </demo-title>
      <template slot="code">
        <mv-checkbox v-model="checked">checkbox</mv-checkbox>
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
      checked: true,
      codeStr: {
        code1: `
          <script>
            export default {

            }
          <\/script>
        `
      }
    }
  },
  mixins: [mixin]
}
</script>
