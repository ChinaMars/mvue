<template>
  <div ref="scrollbar" class="mv-scrollbar">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(MouseWheel)
BScroll.use(ScrollBar)
export default {
  name: 'MvScrollbar',
  props: {
    complete: {
      type: Boolean,
      default: false
    },
    iScrollToTop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      bScroll: null,
      options: {
        scrollY: true,
        click: true,
        taps: true,
        scrollbar: {
          fade: true,
          interactive: true
        },
        mouseWheel: true
      }
    }
  },
  watch: {
    complete (val) {
      if (val) {
        // 监听dom是否加载完毕，重新实例化
        this.$nextTick(() => {
          this.bScroll.scrollTo(0, 0)
          this.bScroll.refresh()
        })
      }
    },
    iScrollToTop (val) {
      if (val) {
        this.bScroll.scrollTo(0, 0)
      }
    }
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      this.bScroll = new BScroll(this.$refs.scrollbar, this.options)
    })
  }
}
</script>

<style lang="scss">
  .mv-scrollbar {
    height: 100%;
    overflow: hidden;
    position: relative;
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }
  }
</style>
