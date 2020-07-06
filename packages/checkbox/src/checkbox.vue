<template>
  <label>
    <input
      type="checkbox"
      v-model="model"
      @change="handleChange"
    />
  </label>
</template>

<script>
import Input from '@pkg/input'
export default {
  name: 'MvCheckbox',
  components: {
    [Input.name]: Input
  },
  props: {
    value: {}
  },
  data() {
    return {

    }
  },
  watch: {

  },
  computed: {
    model: {
      get() {
        console.log(this.value, 'value====')
        return this.value
      },
      set(val) {
        console.log(val, 'set value==')
        this.$emit('input', val)
      }
    }
  },
  mounted() {
    console.log(this.value)
  },
  methods: {
    handleChange(event) {
      console.log(event, 'event====')
    }
  }
}
</script>
