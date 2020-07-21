import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Checkbox from '@pkg/checkbox'
import CheckboxGroup from '@pkg/checkbox-group'

Vue.use(Checkbox)
Vue.use(CheckboxGroup)

describe('Checkbox', () => {
  it('create checkbox', () => {
    const Component = {
      template: '<mv-checkbox v-model="checked"></mv-checkbox>',
      data () {
        return {
          checked: false
        }
      }
    }
    const wrapper = mount(Component)
    expect(wrapper.findComponent(Checkbox).attributes().class).toContain('mv-checkbox')
    wrapper.find('.mv-checkbox-input').trigger('click')
    expect(wrapper.vm.checked).toBe(true)
  })
  it('create checkbox group', async () => {
    const Component = {
      template: `
        <mv-checkbox-group v-model="result">
          <mv-checkbox label="a"></mv-checkbox>
          <mv-checkbox label="b"></mv-checkbox>
          <mv-checkbox label="c"></mv-checkbox>
        </mv-checkbox-group>
      `,
      data () {
        return {
          result: []
        }
      }
    }
    const wrapper = mount(Component)
    const wrapperArray = wrapper.findAll('.mv-checkbox-input')
    await wrapperArray.at(0).trigger('click')
    await wrapperArray.at(1).trigger('click')
    expect(wrapper.vm.result).toEqual(['a', 'b'])
  })
})
