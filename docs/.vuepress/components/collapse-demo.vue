<template>
  <div class="content collapse-content">
    <demo-title>
      <h1 slot="title-name">Collapse 按钮</h1>
      <p slot="des">常用的操作按钮。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
      </demo-title>
      <template slot="code">
        <mv-collapse>
          <mv-collapse-item></mv-collapse-item>
        </mv-collapse>
      </template>
      <template slot="codeStr"></template>
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

        `
      }
    }
  },
  mixins: [mixin],
  methods: {

  }
}
</script>

<style lang="scss">

</style>
