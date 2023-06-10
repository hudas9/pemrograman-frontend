import { Link } from 'react-router-dom'

import StyledMovie from './Movie.styled'

export default function Movie({ movie }) {
  return (
    <StyledMovie>
      <img
        src={
          movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        }
        alt={movie.title}
      />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.year || movie.release_date?.split('-')[0]}</p>
    </StyledMovie>
  )
}
