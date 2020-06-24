<template>
  <div class="lock-code" @click="isExpanded = !isExpanded">
    <span class="lock-code-word">{{controlText}}</span>
  </div>
</template>

<script>
export default {
  name: 'CodeControl',
  data() {
    return {
      isExpanded: false
    }
  },
  computed: {
    controlText() {
      return this.isExpanded ? '显示代码' : '隐藏代码'
    }
  },
  watch: {
    isExpanded(val) {
      console.log(this.$el.getElementsByClassName('meta'))
    }
  }
}
</script>
