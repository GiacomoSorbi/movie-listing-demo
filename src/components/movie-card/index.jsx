import React from 'react'
import './movie-card.css'
import { parseTitle } from '../../utilities'

const MovieCard = props => (
  <div className='movie-card'>
    <div className='movie-card-content'>
      <h3>{parseTitle(props.movie)}</h3>
      <div className='movie-genres'>
        <h4>Genres:</h4>
        <ul>
          {props.movie.genre_ids.map(genre => (
            <li className='genre-item'>{props.genres[genre]}</li>
          ))}
        </ul>
      </div>
      <div className='movie-description'>
        <h4>Description:</h4>
        <p>{props.movie.overview}</p>
      </div>
    </div>
  </div>
)

export default MovieCard
