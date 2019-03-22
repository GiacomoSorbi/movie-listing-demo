/*
 * converting  the data model to a dictionary for efficiency
 * from [{id: a, name: x}, {id: b, name: y}, ...] to {a: x, b: y, ...}
 */
export const parseGenres = genres =>
  genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {})

export const parseTitle = movie =>
  `${movie.title}${
    movie.title !== movie.original_title
      ? ` (Original Title: ${movie.original_title})`
      : ''
  }`

export const filterMovies = (movies, filters = [], minRating = 3) =>
  movies.filter(
    movie =>
      filters.every(filter => movie.genre_ids.includes(filter)) &&
      movie.vote_average >= minRating,
  )
