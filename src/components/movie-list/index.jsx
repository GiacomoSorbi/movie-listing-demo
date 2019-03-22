import React from 'react'
import './movie-list.css'
import MovieCard from '../movie-card'
import { filterMovies } from '../../utilities'

const MovieList = props => (
  <section className='movie-list'>
    {props.error ? (
      <p>{JSON.stringify(props.error)}</p>
    ) : (
      filterMovies(props.movies, props.filters, props.minRating).map(movie => (
        <MovieCard key={movie.title} movie={movie} genres={props.genres} />
      ))
    )}
  </section>
)

export default MovieList
