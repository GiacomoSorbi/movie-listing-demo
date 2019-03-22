import React from 'react'
import './movie-card.css'
import { parseTitle } from '../../utilities'
import { API } from '../../constants'

const MovieCard = props => (
  <div className='movie-card'>
    <div className='movie-card-content'>
      <img
        className='movie-poster'
        src={`${API.IMAGES_URI}w300${props.movie.poster_path}`}
      />
      <div className='movie-info'>
        <h3>{parseTitle(props.movie)}</h3>
        <div className='movie-genres'>
          <h4>Genres:</h4>
          <ul>
            {props.movie.genre_ids.map(genre => (
              <li key={genre} className='genre-item'>
                {props.genres[genre]}
              </li>
            ))}
          </ul>
        </div>
        <div className='movie-description desktop-only'>
          <h4>Description:</h4>
          <p>{props.movie.overview}</p>
        </div>
      </div>
    </div>
  </div>
)

export default MovieCard
