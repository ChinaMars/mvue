<template>
  <div class="demo">
    <slot name="use-title"></slot>
    <slot name="code"></slot>
    <div class="code-content">
      <div class="code-content-height">
        <pre>
          <code class="html">
            <slot name="codeStr"></slot>
          </code>
        </pre>
      </div>
    </div>
    <code-control></code-control>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock'
}
</script>
