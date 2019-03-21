/*
 * converting  the data model to a dictionary for efficiency
 * from [{id: a, name: x}, {id: b, name: y}, ...] to {a: x, b: y, ...}
 */
export const parseGenres = genres =>
  genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})

/*
 * getting unique filters to be displayed in the Filters component
 */
export const getUniqueMovieGenres = movies => {
  return [
    ...movies.reduce((acc, movie) => {
      movie.genre_ids.forEach(id => acc.add(id))
      return acc
    }, new Set()),
  ]
}

/*
 * adding optional original title in the same string when
 * movie.title differs from movie.original title
 */
export const parseTitle = movie =>
  `${movie.title}${
    movie.title !== movie.original_title
      ? ` (Original Title: ${movie.original_title})`
      : ''
  }`

/*
 * filtering movies by both minRating and filter selected
 * if no filters are selected, all movies are displayed
 * if 2 or more filters are selected, only movies matching all of them are selected
 */
export const filterMovies = (movies, filters = [], minRating = 3) =>
  movies.filter(
    movie =>
      filters.every(filter => movie.genre_ids.includes(filter)) &&
      movie.vote_average >= minRating,
  )
