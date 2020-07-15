<template>
  <div class="content collapse-content">
    <demo-title>
      <h1 slot="title-name">Collapse 折叠面板</h1>
      <p slot="des">通过折叠面板收纳内容区域。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
      </demo-title>
      <template slot="code">
        <mv-collapse accordion>
          <mv-collapse-item v-for="(item, index) in 5" :key="index" :title='`标题-${item}`'>内容-{{item}}</mv-collapse-item>
        </mv-collapse>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">可同时展开多个面板，面板之间不影响。</p>
      </demo-title>
      <template slot="code">
        <mv-collapse v-model="activeValue">
          <mv-collapse-item v-for="(item, index) in 5" :key="index" :title='`标题-${item}`' :value="index">内容-{{item}}</mv-collapse-item>
        </mv-collapse>
      </template>
      <template slot="codeStr">{{codeStr.code2}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">手风琴</h2>
        <p slot="des">每次只能展开一个面板。</p>
      </demo-title>
      <template slot="code">
        <mv-collapse v-model="activeAccordionValue" accordion>
          <mv-collapse-item v-for="(item, index) in 5" :key="index" :title='`标题-${item}`' :value="`${index}`">内容-{{item}}</mv-collapse-item>
        </mv-collapse>
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
      activeValue: [1, 2],
      activeAccordionValue: '3',
      codeStr: {
        code1: `
          <mv-collapse accordion>
            <mv-collapse-item
              v-for="(item, index) in 5"
              :key="index"
              :title='\`标题-\${item}\`'
            >
              内容-{{item}}
            </mv-collapse-item>
          </mv-collapse>
        `,
        code2: `
          <mv-collapse v-model="activeValue">
            <mv-collapse-item
              v-for="(item, index) in 5"
              :key="index"
              :title='\`标题-\${item}\`'
              :value="index"
            >
              内容-{{item}}
            </mv-collapse-item>
          </mv-collapse>
          <script>
            export default {
              data() {
                return {
                  activeValue: [1, 2]
                }
              }
            }
          <\/script>
        `,
        code3: `
          <mv-collapse v-model="activeAccordionValue" accordion>
            <mv-collapse-item
              v-for="(item, index) in 5"
              :key="index"
              :title='\`标题-\${item}\`'
              :value="\`\${index}\`"
            >
              内容-{{item}}
            </mv-collapse-item>
          </mv-collapse>
          <script>
            export default {
              data() {
                return {
                  activeAccordionValue: '3'
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

  }
}
</script>

<style lang="scss">

</style>
