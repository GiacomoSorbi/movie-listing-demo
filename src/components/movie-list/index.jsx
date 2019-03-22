import React from 'react'
import './movie-list.css'
import MovieCard from '../movie-card'
import { filterMovies } from '../../utilities'

const MovieList = props => {
  const filteredMovies = filterMovies(
    props.movies,
    props.filters,
    props.minRating,
  )
  return (
    <section className='movie-list'>
      {props.error ? (
        <h3 className='error'>{JSON.stringify(props.error)}</h3>
      ) : props.movies.length && !filteredMovies.length ? (
        <h3 className='error'>
          No Movies Matching the Current Filter Criteria
        </h3>
      ) : (
        filterMovies(props.movies, props.filters, props.minRating).map(
          movie => (
            <MovieCard key={movie.title} movie={movie} genres={props.genres} />
          ),
        )
      )}
    </section>
  )
}

export default MovieList
