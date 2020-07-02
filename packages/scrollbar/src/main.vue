<template>
  <div
    ref="scrollbar"
    class="mv-scrollbar"
  >
    <slot />
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
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      bScroll: null,
      initOptions: {
        click: true,
        tap: true,
        scrollbar: {
          fade: false,
          interactive: true
        },
        mouseWheel: {
          easeTime: 500
        }
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
    this.initOptions = Object.assign({}, this.initOptions, this.options)
    this.$nextTick(() => {
      this.bScroll = new BScroll(this.$refs.scrollbar, this.initOptions)
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
