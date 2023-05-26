import StyledMovie from "./Movie.styled"

function Movie({ movie }) {
  return (
    <StyledMovie>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </StyledMovie>
  )
}

export default Movie
