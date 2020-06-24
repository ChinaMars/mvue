<template>
  <i class="icon" :class="className"></i>
</template>

<script>
export default {
  name: 'MvIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    className () {
      let className = ''
      if (this.name) {
        className = `icon-${this.name}`
      }
      return className
    }
  }
}
</script>

<style lang="scss">
  @import '../../theme/common/iconfont.scss';
</style>
