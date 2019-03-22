import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { genres } from '../../fixtures'

import Filters from './'

describe('Filters should', () => {
  it('exist', () => {
    expect(Filters).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(
      <Filters
        genres={genres}
        onChangeGenreFilters={jest.fn()}
        onChangeMinRating={jest.fn()}
        value={'cat'}
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
