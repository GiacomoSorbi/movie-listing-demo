import { parseGenres, parseTitle, filterMovies } from './'
import { movies, genres } from '../fixtures'

describe('parseGenres should', () => {
  it('exist', () => {
    expect(parseGenres).toBeDefined()
  })

  it('parse genres from an array of `{id: a, name: x}` objects to a dictionary', () => {
    const genresFromAPI = [
      { id: '1', name: 'pippi1' },
      { id: '2', name: 'pippi2' },
      { id: '3', name: 'pippi3' },
      { id: '4', name: 'pippi4' },
      { id: '5', name: 'pippi5' },
    ]
    expect(parseGenres(genresFromAPI)).toEqual({
      '1': 'pippi1',
      '2': 'pippi2',
      '3': 'pippi3',
      '4': 'pippi4',
      '5': 'pippi5',
    })
  })

  it('return an empty objects when provided with an empty array of genres from the API', () => {
    const genresFromAPI = []
    expect(parseGenres(genresFromAPI)).toEqual({})
  })
})

describe('parseTitle should', () => {
  it('exist', () => {
    expect(parseTitle).toBeDefined()
  })

  it('just return the `title` property when it matches the `original_title` property', () => {
    expect(
      parseTitle({
        title: 'Pippi the Cat III',
        original_title: 'Pippi the Cat III',
      }),
    ).toBe('Pippi the Cat III')
  })

  it('return the `title` composed with `original_title` when they are different values', () => {
    expect(
      parseTitle({
        title: 'Pippi the Cat',
        original_title: 'A Feline Adventure',
      }),
    ).toBe('Pippi the Cat (Original Title: A Feline Adventure)')
  })
})

describe('filterMovies should', () => {
  it('exist', () => {
    expect(filterMovies).toBeDefined()
  })

  it('filter only movies of equal or greater rating than the one passed', () => {
    expect(filterMovies(movies, [], 9)).toEqual([movies[0], movies[2]])
    expect(filterMovies(movies, [], 9.5)).toEqual([movies[2]])
  })

  it('filter only movies of the matching genre when on is provided', () => {
    expect(filterMovies(movies, [18], 3)).toEqual([movies[1], movies[2]])
  })

  it('filter only movies of the matching genres when more are provided', () => {
    expect(filterMovies(movies, [18, 26], 3)).toEqual([movies[1], movies[2]])
    expect(filterMovies(movies, [18, 23, 26], 3)).toEqual([movies[2]])
  })

  it('filter by both `minRating` parameter and genres', () => {
    expect(filterMovies(movies, [18, 26], 10)).toEqual([movies[2]])
    expect(filterMovies(movies, [15], 8)).toEqual([movies[0]])
    expect(filterMovies(movies, [15], 9.5)).toEqual([])
    expect(filterMovies(movies, [12], 9)).toEqual([movies[0], movies[2]])
    expect(filterMovies(movies, [24], 9.5)).toEqual([])
  })
})
