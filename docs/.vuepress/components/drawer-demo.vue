<template>
  <div class="content drawer-content">
    <demo-title>
      <h1 slot="title-name">Drawer 抽屉</h1>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">呼出一个临时的侧边栏, 可以从多个方向呼出</p>
      </demo-title>
      <template slot="code">
        <mv-button-group>
          <mv-button
            type-style="primary"
            @click.native="handleDrawer('right')"
          >
            从右打开抽屉
          </mv-button>
          <mv-button
            type-style="primary"
            @click.native="handleDrawer('left')"
          >
            从左打开抽屉
          </mv-button>
          <mv-button
            type-style="primary"
            @click.native="handleDrawer('top')"
          >
            从上打开抽屉
          </mv-button>
          <mv-button
            type-style="primary"
            @click.native="handleDrawer('bottom')"
          >
            从下打开抽屉
          </mv-button>
        </mv-button-group>
        <mv-drawer
          :visible.sync="drawer.visible"
          :position="drawer.position"
        >
          内容
        </mv-drawer>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
  </div>
</template>

<script>
import mixin from '../src/mixin'
export default {
  data() {
    return {
      drawer: {
        visible: false,
        position: 'bottom' // 默认不填右边打开 (right, left, top, bottom)
      },
      codeStr: {
        code1: `
          <mv-button-group>
            <mv-button
              type-style="primary"
              @click.native="handleDrawer('right')"
            >
              从右打开抽屉
            </mv-button>
            <mv-button
              type-style="primary"
              @click.native="handleDrawer('left')"
            >
              从左打开抽屉
            </mv-button>
            <mv-button
              type-style="primary"
              @click.native="handleDrawer('top')"
            >
              从上打开抽屉
            </mv-button>
            <mv-button
              type-style="primary"
              @click.native="handleDrawer('bottom')"
            >
              从下打开抽屉
            </mv-button>
          </mv-button-group>
          <mv-drawer
            :visible.sync="drawer.visible"
            :position="drawer.position"
          >
            内容
          </mv-drawer>
          <script>
            export default {
              data() {
                return {
                  drawer: {
                    visible: false,
                    position: 'bottom' // 默认不填右边打开 (right, left, top, bottom)
                  }
                }
              },
              methods: {
                handleDrawer (position) {
                  this.drawer.visible = true
                  this.drawer.position = position
                }
              }
            }
          <\/script>
        `
      }
    }
  },
  mixins: [mixin],
  methods: {
    handleDrawer (position) {
      this.drawer.visible = true
      this.drawer.position = position
    }
  }
}
</script>
