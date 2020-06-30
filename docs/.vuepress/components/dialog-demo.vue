<template>
  <div class="content dialog-content">
    <demo-title>
      <h1 slot="title-name">Dialog 对话框</h1>
      <p slot="des">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">基础的按钮用法。</p>
      </demo-title>
      <template slot="code">
        <mv-button @click.native="dialogVisible = true">点击打开 Dialog</mv-button>
        <mv-dialog
          title="提示"
          width="30%"
          :visible.sync="dialogVisible"
          :position="`center`"
          @closed="handleClosed"
        >
          <div class="dialog-content">
            dialog 组件
          </div>
          <div
            slot="footer"
            class="dialog-footer-content"
          >
            <mv-button
              @click.native="dialogVisible = false"
            >
              取消
            </mv-button>
            <mv-button
              :type-style="`primary`"
              @click.native="dialogVisible = false"
            >
              确定
            </mv-button>
          </div>
        </mv-dialog>
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
      dialogVisible: false,
      codeStr: {
        code1: `
          <mv-dialog
            title="提示"
            width="30%"
            :visible.sync="dialogVisible"
            :position="\`center\`"
            @closed="handleClosed"
          >
            <div class="dialog-content">
              dialog 组件
            </div>
            <div
              slot="footer"
              class="dialog-footer-content"
            >
              <mv-button
                @click.native="dialogVisible = false"
              >
                取消
              </mv-button>
              <mv-button
                :type-style="\`primary\`"
                @click.native="dialogVisible = false"
              >
                确定
              </mv-button>
            </div>
          </mv-dialog>
          <script>
            export default {
              methods: {
                handleClosed () {
                  alert('dialog 关闭后执行的事件')
                }
              }
            }
          <\/script>
      `,
      }
    }
  },
  mixins: [mixin],
  methods: {
    handleClosed () {
      alert('dialog 关闭后执行的事件')
    }
  }
}
</script>

<style lang="scss">

</style>
