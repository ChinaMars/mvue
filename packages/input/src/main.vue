<template>
  <div class="mv-input">
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="inputClass"
      :disabled="disabled"
      class="mv-input-inner"
      @focus="handleFocus"
      @input="handleInput"
      @blur="handleBlur"
      @change="handleChange"
    >
  </div>
</template>

<script>
export default {
  name: 'MvInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getInput () {
      return this.$refs.input
    },
    inputClass () {
      const className = [
        { 'is-disabled': this.disabled }
      ]
      return className
    }
  },
  watch: {
    value (val) {
      const input = this.getInput
      input.value = val
    }
  },
  mounted() {
    const input = this.getInput
    input.value = this.value
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleChange (event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style lang="scss">
  .mv-input {
    .mv-input-inner {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      width: 100%;

      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }
</style>
