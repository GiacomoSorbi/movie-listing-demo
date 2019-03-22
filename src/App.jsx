import React, { Component } from 'react'
import './app.css'
import { API } from './constants'
import { parseGenres } from './utilities'
import AppHeader from './components/app-header'
import Filters from './components/filters'
import MovieList from './components/movie-list'

class App extends Component {
  state = { movies: [], error: null, filters: [], genres: [], minRating: 0 }
  onChangeGenreFilters = event => {
    const id = +event.currentTarget.id
    const index = this.state.filters.indexOf(id)
    this.setState({
      filters:
        index === -1
          ? this.state.filters.concat(id)
          : this.state.filters.filter(filter => filter !== id),
    })
  }
  onChangeMinRating = event =>
    this.setState({ minRating: +event.currentTarget.value })

  componentDidMount() {
    //fetching movie list
    fetch(`${API.BASE_URI}movie/now_playing?api_key=${API.API_KEY.V3}`, {
      'Content-Type': 'application/json',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.results.sort(
            (movA, movB) => movB.popularity - movA.popularity,
          ),
        })
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
          <Filters
            filters={this.state.filters}
            genres={this.state.genres}
            onChangeGenreFilters={this.onChangeGenreFilters}
            onChangeMinRating={this.onChangeMinRating}
          />
          <MovieList
            error={this.state.error}
            filters={this.state.filters}
            genres={this.state.genres}
            minRating={this.state.minRating}
            movies={this.state.movies}
          />
        </main>
      </div>
    )
  }
}

export default App
