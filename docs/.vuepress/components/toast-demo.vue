<template>
  <div class="content toast-content">
    <demo-title>
      <h1 slot="title-name">Toast 轻提示</h1>
      <p slot="des">在页面中间弹出黑色半透明提示，用于消息通知、操作结果提示等场景。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">文字提示</p>
      </demo-title>
      <template slot="code">
        <mv-button
          type-style="primary"
          @click.native="toastBase"
        >
          提示框
        </mv-button>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">手动关闭轻提示</h2>
      </demo-title>
      <template slot="code">
        <mv-button
          type-style="primary"
          @click.native="toastManual"
        >
          提示框
        </mv-button>
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
          <mv-button
            type-style="primary"
            @click.native="toastBase"
          >
            提示框
          </mv-button>

          <script>
            export default {
              methods: {
                toastBase () {
                  this.$toast({
                    visible: true,
                    duration: 2000,
                    message: '加入购物车成功'
                  })
                }
              }
            }
          <\/script>
        `,
        code2: `
          <mv-button
            type-style="primary"
            @click.native="toastManual"
          >
            提示框
          </mv-button>

          <script>
            export default {
              methods: {
                toastManual () {
                  this.$toast({
                    visible: true,
                    duration: 0, // 持续展示 toast
                    message: '加入购物车成功'
                  })
                  setTimeout(() => {
                    this.$toast.clear()
                  }, 2000)
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
    toastBase () {
      this.$toast({
        visible: true,
        duration: 2000,
        message: '加入购物车成功'
      })
    },
    toastManual () {
      this.$toast({
        visible: true,
        duration: 0, // 持续展示 toast
        message: '加入购物车成功'
      })
      setTimeout(() => {
        this.$toast.clear()
      }, 2000)
    }
  }
}
</script>
