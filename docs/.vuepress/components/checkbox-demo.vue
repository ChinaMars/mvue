<template>
  <div class="content checkbox-content">
    <demo-title>
      <h1 slot="title-name">Checkbox 复选框</h1>
      <p slot="des">表单中的一个选择框。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
      </demo-title>
      <template slot="code">
        <mv-checkbox v-model="checked" name="checkbox">复选框</mv-checkbox>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">多选复选框</h2>
        <p slot="des">适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
      </demo-title>
      <template slot="code">
        <mv-checkbox-group v-model="result">
          <mv-checkbox v-for="item in checkboxGroup" :label="item" :key="item">{{item}}</mv-checkbox>
        </mv-checkbox-group>
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
      checked: true,
      result: ['蜘蛛侠', '钢铁侠', '超人'],
      checkboxGroup: ['蜘蛛侠', '超人', '钢铁侠', '灭霸', '蝙蝠侠'],
      codeStr: {
        code1: `
          <mv-checkbox v-model="checked">复选框</mv-checkbox>

          <script>
            export default {
              data() {
                return {
                  checked: true
                }
              }
            }
          <\/script>
        `,
        code2: `
          <mv-checkbox-group v-model="result">
            <mv-checkbox v-for="item in checkboxGroup" :label="item" :key="item">{{item}}</mv-checkbox>
          </mv-checkbox-group>

          <script>
            export default {
              data() {
                return {
                  result: ['蜘蛛侠', '钢铁侠', '超人'],
                  checkboxGroup: ['蜘蛛侠', '超人', '钢铁侠', '灭霸', '蝙蝠侠']
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
.checkbox-content{
  .mv-checkbox-group{
    display: flex;
  }
  .mv-checkbox{
    margin-right: 15px;
  }
}
</style>
