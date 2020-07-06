<template>
  <div class="home">
    <div class="block">
      <h2>Dialog 对话框</h2>
      <mv-button
        :type-style="button.typeStyle"
        @click.native="mvDialog"
      >
        对话框
      </mv-button>
    </div>
    <div class="block">
      <h2>Scroll Bar 滚动条</h2>
      <div class="scroll-text">
        <mv-scrollbar :complete="scrollBar">
          <ul>
            <li
              v-for="(item, index) in 50"
              :key="index"
            >
              滚动内容{{ item }}
            </li>
          </ul>
        </mv-scrollbar>
      </div>
    </div>
    <mv-dialog
      title="提示"
      width="30%"
      :visible.sync="dialogShow"
      :position="`center`"
      :before-close="handleBeforeClose"
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
          @click.native="handleBtnClick"
        >
          取消
        </mv-button>
        <mv-button
          :type="button.type"
          :type-style="button.typeStyle"
          @click.native="handleBtnClick"
        >
          确定
        </mv-button>
      </div>
    </mv-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Scrollbar, Dialog } from 'mvue-ui';

Vue.use(Button)
Vue.use(Scrollbar)
Vue.use(Dialog)

export default {
  name: 'Home',
  data () {
    return {
      button: {
        type: 'submit',
        typeStyle: 'primary'
      },
      scrollBar: true,
      dialogShow: false
    }
  },
  methods: {
    handleBeforeClose (callback) {
      alert('dialog关闭前执行的事件')
      setTimeout(() => {
        const flag = true
        if (callback) {
          callback(flag)
        }
      }, 1000)
    },
    handleClosed () {
      alert('dialog关闭后执行的事件')
    },
    mvDialog () {
      this.dialogShow = true
    },
    handleBtnClick () {
      this.dialogShow = false
    }
  }
}
</script>

<style lang="scss">
.scroll-text {
  height: 250px;
  overflow: hidden;
  width: 240px;

  li {
    height: 34px;
    line-height: 34px;
  }
}
</style>
