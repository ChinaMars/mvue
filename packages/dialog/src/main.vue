<template>
  <transition name="mv-dialog-fade">
    <div
      v-show="visible"
      :style="{'z-index': zIndex}"
      :class="positionClass"
      class="mv-dialog-wrap"
      @click.self="handleWrapClick()"
    >
      <div
        class="mv-dialog"
        :style="style"
      >
        <div class="mv-dialog-header">
          <slot name="title">
            <div class="mv-dialog-title">
              {{ title }}
            </div>
          </slot>
          <div
            class="mv-dialog-close"
            @click="handleClose"
          >
            <mv-icon name="mv-close" />
          </div>
        </div>
        <div class="mv-dialog-body">
          <slot />
        </div>
        <div
          v-if="$slots.footer"
          class="mv-dialog-footer"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MaskMixin from '@src/mixins/mask'
import Icon from '@pkg/icon'
export default {
  name: 'MvDialog',
  components: {
    [Icon.name]: Icon
  },
  mixins: [MaskMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'auto'
    },
    zIndex: {
      type: Number,
      default: 1001
    },
    width: {
      type: String,
      default: '30%'
    },
    title: {
      type: String,
      default: ''
    },
    beforeClose: {
      type: Function,
      default: null
    },
    closeByMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style () {
      const style = {}
      style.width = this.width
      return style
    },
    positionClass () {
      let className = ''
      if (this.position) {
        className = `mv-dialog-${this.position}`
      }
      return className
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.createInstanceMask({
          show: true
        })
      } else {
        this.instanceMask.visible = false
      }
    }
  },
  methods: {
    handleClose () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hideDialog)
      } else {
        this.hideDialog()
      }
    },
    hideDialog (res) {
      if (res) { // 监听是否关闭之前的事件执行完成
        this.$emit('update:visible', false)
        this.$emit('close')
      } else {
        this.$emit('update:visible', false)
        this.$emit('close')
      }
    },
    handleWrapClick () {
      if (this.closeByMask) {
        this.handleClose()
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../theme/common/var.scss';
  .mv-dialog-wrap {
    bottom: 0;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;

    &.mv-dialog-center {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    &.mv-dialog-auto {
      .mv-dialog{
        margin: 100px auto 50px;
      }
    }

    .mv-dialog {
      background: $dialog-background-color;
      padding: 20px;
    }

    .mv-dialog-header {
      display: flex;
      justify-content: space-between;
    }

    .mv-dialog-title {
      color: $color-black;
      font-size: $dialog-title-font-size;
    }

    .mv-dialog-close {
      cursor: pointer;

      .icon-mv-close {
        font-size: 16px;
      }
    }

    .mv-dialog-body {
      color: $font-color-default;
      padding: 20px 0;
    }

    .mv-dialog-footer {
      text-align: right;
    }
  }

  .mv-dialog-fade-enter-active {
    animation: mv-dialog-fade-in 0.3s;
  }

  .mv-dialog-fade-leave-active {
    animation: mv-dialog-fade-out 0.3s;
  }
  @keyframes mv-dialog-fade-in {
    0% {
      opacity: 0;
      transform: translate3d(0, -40px, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes mv-dialog-fade-out {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    100% {
      opacity: 0;
      transform: translate3d(0, -40px, 0);
    }
  }
</style>
