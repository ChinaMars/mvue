import { mount } from '@vue/test-utils'
import Button from '@p/button'

describe('Button', () => {
  const wrapper = mount(Button, {
    propsData: {
      typeStyle: 'primary'
    }
  })
  it('create', () => {
    expect(wrapper.findComponent(Button).attributes().class).toContain('mv-button-primary')
  })
})
