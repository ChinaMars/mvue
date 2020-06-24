<template>
  <transition
    name="mv-drawer-fade"
  >
    <div
      v-show="visible"
      :style="{'z-index': zIndex}"
      :class="{'open': visible}"
      class="mv-drawer"
      @click.self="handleWrapClick()"
    >
      <div
        :class="positionClass"
        class="mv-drawer-container"
      >
        <div class="mv-drawer-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MaskMixin from '@src/mixins/mask'
export default {
  name: 'MvDrawer',
  mixins: [MaskMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1001
    },
    closeByMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    positionClass () {
      if (this.position) {
        return `mv-drawer-${this.position}`
      } else {
        return ''
      }
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
      this.$emit('update:visible', false)
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
  $directions: right, left, top, bottom;

  .mv-drawer {
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
  }

  .mv-drawer-container {
    background: $drawer-background-color;
    height: 100%;
    position: absolute;
  }

  .mv-drawer-left,
  .mv-drawer-right {
    bottom: 0;
    top: 0;
  }

  .mv-drawer-left {
    left: 0;
    width: 30%;
  }

  .mv-drawer-right {
    right: 0;
    width: 30%;
  }

  .mv-drawer-top,
  .mv-drawer-bottom {
    left: 0;
    right: 0;
  }

  .mv-drawer-top {
    height: 30%;
    top: 0;
    width: 100%;
  }

  .mv-drawer-bottom {
    bottom: 0;
    height: 30%;
    width: 100%;
  }

  .mv-drawer-content {
    padding: 20px;
  }

  .mv-drawer-fade-enter-active {
    animation: mv-drawer-fade-in 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .mv-drawer-fade-leave-active {
    animation: mv-drawer-fade-out 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  @keyframes mv-drawer-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes mv-drawer-fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @mixin drawer-in($directions) {
    .mv-drawer.open {
      .mv-drawer-#{$directions} {
        animation: #{$directions}-drawer-in 0.3s 1ms;
      }
    }
  }

  @mixin drawer-out($directions) {
    .mv-drawer-#{$directions} {
      animation: #{$directions}-drawer-out 0.3s 1ms;
    }
  }

  @mixin drawer-animation($direction) {
    @keyframes #{$direction}-drawer-in {
      0% {
        @if $direction == right {
          transform: translate(100%);
        }
        @if $direction == left {
          transform: translate(-100%);
        }
        @if $direction == top {
          transform: translate(0, -100%);
        }
        @if $direction == bottom {
          transform: translate(0, 100%);
        }
      }

      100% {
        transform: translate(0);
      }
    }

    @keyframes #{$direction}-drawer-out {
      0% {
        transform: translate(0);
      }

      100% {
        @if $direction == right {
          transform: translate(100%);
        }
        @if $direction == left {
          transform: translate(-100%);
        }
        @if $direction == top {
          transform: translate(0, -100%);
        }
        @if $direction == bottom {
          transform: translate(0, 100%);
        }
      }
    }
  }

  @each $direction in $directions {
    @include drawer-in($direction);
    @include drawer-out($direction);
  }
  @include drawer-animation(right);
  @include drawer-animation(left);
  @include drawer-animation(top);
  @include drawer-animation(bottom);
</style>
