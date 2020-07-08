<template>
  <div class="content toast-content">
    <demo-title>
      <h1 slot="title-name">Toast 提示框</h1>
      <p slot="des">界面上的消息提示框</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
      </demo-title>
      <template slot="code">
        <mv-button
          type-style="primary"
          @click.native="toast"
        >
          提示框
        </mv-button>
      </template>
      <template slot="codeStr"></template>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toast () {
      this.$toast({
        visible: true,
        duration: 2000,
        message: '加入购物成功'
      })
    }
  }
}
</script>
