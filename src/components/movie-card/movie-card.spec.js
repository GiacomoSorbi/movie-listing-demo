import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { movies, genres } from '../../fixtures'

import MovieCard from './'

describe('MovieCard should', () => {
  it('exist', () => {
    expect(MovieCard).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<MovieCard genres={genres} movie={movies[0]} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
