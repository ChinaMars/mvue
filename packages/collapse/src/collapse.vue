<template>
  <div class="mv-collapse">
    <slot />
  </div>
</template>>

<script>
export default {
  name: 'MvCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String],
      default: () => []
    }
  },
  data () {
    return {
      activedValue: []
    }
  },
  provide () {
    return {
      collapse: this
    }
  },
  watch: {
    value (newVal) {
      this.activedValue = [...newVal]
    }
  },
  created () {
    this.activedValue = [...this.value]
    this.$on('collapseItem-click', this.handleCollapseItemClick)
  },
  methods: {
    setActivedValue (activedValue) {
      this.activedValue = activedValue
      this.$emit('input', activedValue)
    },
    handleCollapseItemClick (item) {
      const existActivedValue = this.activedValue.includes(item.value)
      const clickValue = item.value
      let activedValue
      if (this.accordion) {
        if (this.activedValue.length < 2 && existActivedValue) {
          activedValue = []
        } else {
          activedValue = [].concat(clickValue)
        }
      } else {
        if (existActivedValue) {
          activedValue = this.activedValue.filter(item => item !== clickValue)
        } else {
          activedValue = [clickValue, ...this.activedValue]
        }
      }
      this.setActivedValue(activedValue)
    }
  }
}
</script>>

<style lang="scss">
@import '../../theme/common/var.scss';
.mv-collapse{
  border-top: 1px solid $border-color-default;
}
</style>
