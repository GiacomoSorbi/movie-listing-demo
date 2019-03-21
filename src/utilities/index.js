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
    movie.title !== movie.original_title ? ` (${movie.original_title})` : ''
  }`
