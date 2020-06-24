<template>
  <li
    :class="{'selected': selected}"
    class="mv-option"
    @click.stop="optionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
import findCompontent from '@src/utils/find-compontent'
export default {
  name: 'MvOption',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: [String, Number],
      default: null
    }
  },
  data () {
    return {
      currentLabel: null
    }
  },
  inject: ['select'],
  computed: {
    currentValue () {
      return this.select.value
    },
    selected () {
      return this.checkedSelected(this.currentValue, this.value)
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        if (this.currentValue === value) {
          const getCompontent = findCompontent(this, 'MvSelect')
          getCompontent.$emit('handleOptionClick', this)
        }
      }
    }
  },
  created () {
    this.currentLabel = this.label
  },
  methods: {
    optionClick () {
      const getCompontent = findCompontent(this, 'MvSelect')
      getCompontent.$emit('handleOptionClick', this)
    },
    checkedSelected (value, value2) {
      return value === value2
    }
  }
}
</script>

<style lang="scss">
  @import '../../theme/common/var.scss';
  .mv-option-wrap {
    .mv-option {
      color: $font-color-default;
      cursor: pointer;
      font-size: $select-font-size-default;
      height: 34px;
      line-height: 34px;
      padding: 0 20px;

      &.selected {
        background: $select-option-background-color;
      }

      &:hover {
        background: $select-option-background-color;
      }
    }
  }
</style>
