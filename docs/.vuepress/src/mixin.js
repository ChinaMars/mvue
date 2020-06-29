export default {
  watch: {
    codeStr: {
      immediate: true,
      handler: function(newVal) {
        if (newVal) {
          Object.keys(newVal).forEach((name) => {
            this.codeStr[name] = this.handleCodeStr(this.codeStr[name])
          })
        }
      }
    }
  },
  methods: {
    handleCodeStr(data) {
      return data.replace(/^ {10}/gm, '').trim()
    }
  }
}
