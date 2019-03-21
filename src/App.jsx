import React, { Component } from 'react'
import './App.css'
import { API } from './constants'
import { parseGenres } from './utilities'
import MovieCard from './components/movie-card'
import AppHeader from './components/app-header'

class App extends Component {
  state = { movies: [], error: null, filters: [], genres: [] }
  componentDidMount() {
    //fetching movie list
    fetch(`${API.BASE_URI}movie/now_playing?api_key=${API.API_KEY.V3}`, {
      'Content-Type': 'application/json',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ movies: res.results })
      })
      .catch(error => this.setState({ error }))
    //fetching genre list
    fetch(`${API.BASE_URI}genre/movie/list?api_key=${API.API_KEY.V3}`, {
      'Content-Type': 'application/json',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ genres: parseGenres(res.genres) })
      })
      .catch(error => this.setState({ error }))
  }
  render() {
    return (
      <div className='app'>
        <AppHeader />
        <main>
          {this.state.error ? (
            <p>{JSON.stringify(this.state.error)}</p>
          ) : (
            this.state.movies.map(movie => (
              <MovieCard
                key={movie.original_title}
                movie={movie}
                genres={this.state.genres}
              />
            ))
          )}
        </main>
      </div>
    )
  }
}

export default App
