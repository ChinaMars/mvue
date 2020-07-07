<template>
  <div class="mv-checkbox-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MvCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: []
    }
  }
}
</script>
