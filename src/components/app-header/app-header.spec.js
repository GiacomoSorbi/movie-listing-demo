import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import AddHeader from './'

describe('AddHeader should', () => {
  it('exist', () => {
    expect(AddHeader).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<AddHeader />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
