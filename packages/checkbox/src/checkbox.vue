<template>
  <label
    class="mv-checkbox"
  >
    <span
      class="mv-checkbox-input"
      :class="{'checked': isChecked}"
    >
      <span class="mv-checkbox-icon">
        <mv-icon
          v-show="isChecked"
          name="mv-selected"
        />
      </span>
      <input
        v-model="model"
        class="mv-checkbox-original"
        type="checkbox"
        :value="label"
        :name="name"
        @change="handleChange"
      >
    </span>
    <span
      v-if="$slots.default"
      class="mv-checkbox-label"
    >
      <slot />
    </span>
  </label>
</template>

<script>
import findCompontent from '@src/utils/find-compontent'
import Icon from '@pkg/icon'
export default {
  name: 'MvCheckbox',
  components: {
    [Icon.name]: Icon
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    label: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    checked: Boolean
  },
  data () {
    return {

    }
  },
  computed: {
    model: {
      get () {
        if (this.isGroup) {
          return this.checkBoxGroup.value
        } else {
          return this.value
        }
      },
      set (val) {
        if (this.isGroup) {
          this.checkBoxGroup.$emit('input', val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    isChecked () {
      if (this.isGroup && Array.isArray(this.model)) {
        return this.model.includes(this.label)
      } else {
        return this.model
      }
    },
    checkBoxGroup () {
      const getCompontent = findCompontent(this, 'MvCheckboxGroup')
      return getCompontent
    },
    isGroup () {
      if (this.checkBoxGroup) {
        return true
      }
      return false
    }
  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleChange (event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style lang="scss">
  @import '../../theme/common/var.scss';
  @import '../../theme/mixins/flex.scss';

  .mv-checkbox{
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    display: flex;
  }
  .mv-checkbox-input{
    @include flex-middle-center;
    &.checked{
      .mv-checkbox-icon{
        background: $color-primary;
        border-color: $color-primary;
      }
      .icon{
        color: $color-white;
        font-weight: $font-weight-bold;
      }
    }
    .mv-checkbox-icon{
      width: $checkbox-icon-size;
      height: $checkbox-icon-size;
      border: 1px solid $border-color-default;
      display: inline-block;
      margin: 0;
      @include flex-center;
    }
  }
  .mv-checkbox-original{
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  .mv-checkbox-label{
    padding-left: 10px;
    line-height: 18px;
    font-size: $checkbox-label-font;
  }
</style>
