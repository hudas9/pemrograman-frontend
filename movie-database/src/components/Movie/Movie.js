import { Link } from 'react-router-dom'
import StyledMovie from './Movie.styled'

export default function Movie({ movie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'https://placeholder.com/268x402?text=Poster'

  return (
    <StyledMovie>
      <img src={movie.poster || poster} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.year || movie.release_date?.split('-')[0]}</p>
    </StyledMovie>
  )
}
