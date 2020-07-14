import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Button from '@pkg/button'

Vue.use(Button)

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      propsData: {
        typeStyle: 'primary'
      }
    })
    expect(wrapper.findComponent(Button).attributes().class).toContain('mv-button-primary')
  })
  
  it('slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="slot-content">按钮</span>'
      }
    })
    expect(wrapper.findComponent(Button).find('.slot-content')).toBeTruthy()
  })
})
