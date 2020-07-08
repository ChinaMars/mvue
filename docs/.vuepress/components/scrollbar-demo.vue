<template>
  <div class="content scrollbar-content">
    <demo-title>
      <h1 slot="title-name">Scrollbar 滚动条</h1>
      <p slot="des">滚动条，目前只尝试了 <a target="_blank" href="https://better-scroll.github.io/docs/zh-CN/guide/">better-scroll</a> 基本的方法</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
      </demo-title>
      <template slot="code">
        <mv-scrollbar>
          <ul>
            <li v-for="(item, index) in 50" :key="index">滚动内容{{ item }}</li>
          </ul>
        </mv-scrollbar>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">鼠标悬浮显示滚动条</h2>
      </demo-title>
      <template slot="code">
        <mv-scrollbar
          :options="scrollbarOptions"
        >
          <ul>
            <li v-for="(item, index) in 50" :key="index">滚动内容{{ item }}</li>
          </ul>
        </mv-scrollbar>
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
      scrollbarOptions: {
        scrollbar: {
          fade: true
        }
      },
      codeStr: {
        code1: `
          <mv-scrollbar>
            <ul>
              <li v-for="(item, index) in 50" :key="index">滚动内容{{ item }}</li>
            </ul>
          </mv-scrollbar>
        `,
        code2: `
          <mv-scrollbar
            :options="scrollbarOptions"
          >
            <ul>
              <li v-for="(item, index) in 50" :key="index">滚动内容{{ item }}</li>
            </ul>
          </mv-scrollbar>
          <script>
            export default {
              data() {
                return {
                  scrollbarOptions: {
                    scrollbar: {
                      fade: true
                    }
                  }
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
.scrollbar-content{
  .mv-scrollbar {
    height: 250px;
    overflow: hidden;
    width: 240px;
    li {
      height: 34px;
      line-height: 34px;
    }
  }
  .bscroll-vertical-scrollbar{
    z-index: 995 !important;
  }
}
</style>
