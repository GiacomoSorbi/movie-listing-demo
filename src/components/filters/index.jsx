import React from 'react'
import './filters.css'
import Filter from '../filter'

const Filters = props => (
  <section className='movie-filters'>
    <div className='movie-filters-genres'>
      {Object.keys(props.genres).map(genre => (
        <Filter
          key={genre}
          name={props.genres[genre]}
          onChange={props.onChangeGenreFilters}
          value={genre}
        />
      ))}
    </div>
    <input
      type='number'
      defaultValue='3'
      min='0'
      max='10'
      step='0.5'
      onChange={props.onChangeMinRating}
      id='min-rating'
    />
    <label htmlFor='min-rating'>Minimum Rating</label>
  </section>
)

export default Filters
