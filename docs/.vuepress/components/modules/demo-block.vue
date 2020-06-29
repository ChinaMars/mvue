<template>
  <div class="demo">
    <slot name="use-title"></slot>
    <div class="demo-block">
      <div class="source">
        <slot name="code"></slot>
      </div>
      <div class="code-content">
        <div class="code-content-height">
          <pre><code class="html"><slot name="codeStr"></slot></code></pre>
        </div>
      </div>
      <div class="demo-block-control" @click="isExpanded = !isExpanded">
        <span class="block-control-word">{{controlText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  data() {
    return {
      isExpanded: false
    }
  },
  computed: {
    controlText() {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    codeArea() {
      return this.$el.getElementsByClassName('code-content')[0];
    },
    codeAreaHeight() {
      return this.$el.getElementsByClassName('code-content-height')[0].clientHeight
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight}px` : '0'
      console.log(this.codeAreaHeight, 'codeAreaHeight')
      if (!val) {

      }
    }
  }
}
</script>
