<template>
  <div class="mv-collapse-item">
    <div
      class="mv-collapse-item__header"
      @click="handleHeaderClick"
    >
      <slot name="title">
        <div class="mv-collapse-item__title">
          <span>{{ title }}</span>
        </div>
      </slot>
      <mv-icon
        :name="iconName"
        class="mv-collapse__icon"
      />
    </div>
    <transition
      enter-active-class="accordion-enter-active"
      leave-active-class="accordion-leave-active"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        v-show="isActive"
        class="mv-collapse-item__wrap"
      >
        <div class="mv-collapse-item__content">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>>

<script>
import Icon from '@pkg/icon'
import findCompontent from '@src/utils/find-compontent'
export default {
  name: 'MvCollapseItem',
  components: {
    [Icon.name]: Icon
  },
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default () {
        return this._uid
      }
    }
  },
  inject: ['collapse'],
  computed: {
    isActive () {
      console.log(this.collapse.activedValue, 'this.collapse==')
      console.log(this.value, 'this.value==')
      const collapseActived = this.collapse.activedValue
      return collapseActived.includes(this.value)
    },
    iconName () {
      return this.isActive
        ? 'mv-arrow-down'
        : 'mv-arrow-right'
    }
  },
  methods: {
    handleHeaderClick () {
      const getCompontent = findCompontent(this, 'MvCollapse')
      getCompontent.$emit('collapseItem-click', this)
    },
    beforeEnter (el) {
      if (!el.dataset) el.dataset = {}
      el.style.height = 0
    },
    enter (el) {
      if (el.scrollHeight !== 0) {
        el.style.height = `${el.scrollHeight}px`
      } else {
        el.style.height = 0
      }
    },
    afterEnter (el) {
      // for safari: remove class then reset height is necessary
      el.style.height = ''
    },
    beforeLeave (el) {
      el.style.height = `${el.scrollHeight}px`
    },
    leave (el) {
      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        el.style.height = 0
      }
    },
    afterLeave (el) {
      el.style.height = ''
    }
  }
}
</script>>

<style lang="scss">
@import '../../theme/common/var.scss';
@import '../../theme/mixins/flex.scss';

.mv-collapse-item__header{
  cursor: pointer;
  font-size: $font-size-default;
  line-height: 24px;
  padding: 12px 0;
  border-bottom: 1px solid $border-color-default;
  font-weight: $font-weight-default;
  background: $color-white;
  @include flex-space-between-middle
}
.mv-collapse__icon{
  font-size: $font-size-large;
}
.mv-collapse-item__wrap{
  background: $color-white;
}
.mv-collapse-item__content{
  padding: 12px 0 5px 0;
  font-size: 13px;
}
.accordion-enter-active,
.accordion-leave-active{
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
</style>
