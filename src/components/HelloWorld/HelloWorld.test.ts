import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { describe, it, expect } from 'vitest'

describe('HelloWorld.vue', () => {
  it('should renders is page content is correct', () => {
    const message = 'Happy People'
    const testMessage = 'Happy People'
    const wrapper = mount(HelloWorld, {
      props: { message: message },
    })

    expect(wrapper.props().message).toBe(testMessage)
    expect(wrapper.text()).toContain(testMessage)
  })

  it('should render if props value is correct', () => {
    const message = 'Happy People'
    const testMessage = 'Happy People'

    const wrapper = mount(HelloWorld, {
      props: { message },
    })

    expect(wrapper.props().message).toBe(testMessage)
    expect(wrapper.text()).toContain(testMessage)
  })
})
