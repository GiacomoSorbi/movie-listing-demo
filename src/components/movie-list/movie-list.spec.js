import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { movies, genres } from '../../fixtures'

import MovieList from './'

describe('MovieList should', () => {
  it('exist', () => {
    expect(MovieList).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(
      <MovieList
        filters={[2]}
        genres={genres}
        onChangeGenreFilters={jest.fn()}
        onChangeMinRating={jest.fn()}
        movies={movies}
        minRating='7'
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
