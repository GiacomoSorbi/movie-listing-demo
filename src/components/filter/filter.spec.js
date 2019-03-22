import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Filter from './'

describe('Filter should', () => {
  it('exist', () => {
    expect(Filter).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(
      <Filter name={'pippi'} onChange={jest.fn()} value={'cat'} />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
