import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'
import Mvue from 'mvue-ui'
import 'mvue-ui/lib/theme/index.css'
import demoTitle from './components/modules/demo-title'
import codeControl from './components/modules/code-control'
import demoBlock from './components/modules/demo-block'

export default ({
  Vue
}) => {
  Vue.mixin({
    mounted() {
      Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)')
        Array.prototype.forEach.call(blocks, hljs.highlightBlock)
      })
    }
  })
  Vue.component(demoTitle.name, demoTitle)
  Vue.component(codeControl.name, codeControl)
  Vue.component(demoBlock.name, demoBlock)
  Vue.use(Mvue)
}
