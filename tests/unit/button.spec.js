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

  it('type', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'submit'
      }
    })
    expect(wrapper.findComponent(Button).attributes().type).toContain('submit')
  })

  it('icon', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'mv-close'
      }
    })
    expect(wrapper.findComponent(Button).find('.mv-close')).toBeTruthy()
  })

  it('disabled', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.findComponent(Button).attributes().class).toContain('disabled')
  })

  it('slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="slot-content">按钮</span>'
      }
    })
    expect(wrapper.findComponent(Button).find('.slot-content')).toBeTruthy()
  })

  it('click', () => {
    const Component = {
      template: '<mv-button @click.native="handleClick">button</mv-button>',
      methods: {
        handleClick () {
          return true
        }
      }
    }
    const wrapper = mount(Component)
    const spy = jest.spyOn(wrapper.vm, 'handleClick')
    wrapper.findComponent(Button).find('button').trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
