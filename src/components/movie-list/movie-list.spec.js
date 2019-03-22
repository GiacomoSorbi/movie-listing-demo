import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { movies, genres } from '../../fixtures'

import MovieList from './'

describe('MovieList should', () => {
  it('exist', () => {
    expect(MovieList).toBeDefined()
  })

  it('have a consistent structure when displaying movies', () => {
    const wrapper = mount(
      <MovieList
        filters={[12]}
        genres={genres}
        onChangeGenreFilters={jest.fn()}
        onChangeMinRating={jest.fn()}
        movies={movies}
        minRating='7'
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('have a consistent structure when not displaying movies (filtered out)', () => {
    const wrapper = mount(
      <MovieList
        filters={[15]}
        genres={genres}
        onChangeGenreFilters={jest.fn()}
        onChangeMinRating={jest.fn()}
        movies={movies}
        minRating='10'
      />,
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
