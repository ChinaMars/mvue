<template>
  <div class="content">
    <demo-title slot="title">
      <h1 slot="title-name">Button 按钮</h1>
      <span slot="des">常用的操作按钮。</span>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <span slot="des">基础的按钮用法。</span>
      </demo-title>
      <mv-button @click.native="handleClick" slot="code">按钮</mv-button>
      <template slot="codeStr">
        {{codeStr1}}
      </template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">禁用状态</h2>
        <span slot="des">按钮不可用状态</span>
      </demo-title>
      <mv-button disabled slot="code">按钮</mv-button>
      <template slot="codeStr">
        {{codeStr1}}
      </template>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      codeStr1: `
        <mv-button @click.native="handleClick">按钮</mv-button>
      `,
      codeStr2: `
        <mv-button disabled>按钮</mv-button>
      `
    }
  },
  methods: {
    handleClick () {
      console.log("2222")
    }
  }
}
</script>
