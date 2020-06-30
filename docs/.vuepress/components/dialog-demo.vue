<template>
  <div class="content dialog-content">
    <demo-title>
      <h1 slot="title-name">Dialog 对话框</h1>
      <p slot="des">在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
      </demo-title>
      <template slot="code">
        <mv-button @click.native="baseDialogVisible">点击打开 Dialog</mv-button>
        <mv-button @click.native="dialogVisiblePosition">点击打开 Dialog 上下居中对齐</mv-button>
        <mv-dialog
          title="提示"
          :visible.sync="dialogVisible"
          :position="dialogPosition"
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
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">关闭对话框执行事件</h2>
        <p slot="des">有时需要关闭对话框后，执行一些别的事件。</p>
      </demo-title>
      <template slot="code">
        <mv-button @click.native="closeDialogVisible = true">点击打开 Dialog</mv-button>
        <mv-dialog
          title="提示"
          :visible.sync="closeDialogVisible"
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
              @click.native="closeDialogVisible = false"
            >
              取消
            </mv-button>
            <mv-button
              :type-style="`primary`"
              @click.native="closeDialogVisible = false"
            >
              确定
            </mv-button>
          </div>
        </mv-dialog>
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
      dialogVisible: false,
      closeDialogVisible: false,
      codeStr: {
        code1: `
          <mv-button @click.native="baseDialogVisible">点击打开 Dialog</mv-button>
          <mv-button @click.native="dialogVisiblePosition">点击打开 Dialog 上下居中对齐</mv-button>

          <mv-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :position="dialogPosition"
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
              data() {
                return {
                  dialogVisible: false
                }
              },
              methods: {
                baseDialogVisible() {
                  this.dialogVisible = true
                  this.dialogPosition = 'auto'
                },
                dialogVisiblePosition() {
                  this.dialogVisible = true
                  this.dialogPosition = 'center'
                }
              }
            }
          <\/script>
        `,
        code2: `
          <mv-button @click.native="closeDialogVisible = true">点击打开 Dialog</mv-button>

          <mv-dialog
            title="提示"
            :visible.sync="closeDialogVisible"
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
                @click.native="closeDialogVisible = false"
              >
                取消
              </mv-button>
              <mv-button
                :type-style="\`primary\`"
                @click.native="closeDialogVisible = false"
              >
                确定
              </mv-button>
            </div>
          </mv-dialog>
          <script>
            export default {
              data() {
                return {
                  closeDialogVisible: false
                }
              },
              methods: {
                handleClosed () {
                  alert('dialog 关闭后执行的alert事件')
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
      alert('dialog 关闭后执行的alert事件')
    },
    baseDialogVisible() {
      this.dialogVisible = true
      this.dialogPosition = 'auto'
    },
    dialogVisiblePosition() {
      this.dialogVisible = true
      this.dialogPosition = 'center'
    }
  }
}
</script>

<style lang="scss">

</style>
