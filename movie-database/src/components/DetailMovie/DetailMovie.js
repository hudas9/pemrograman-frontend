import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ENDPOINTS from '../../utils/constants/endpoints'
import axios from 'axios'
import StyledDetailMovie from './DetailMovie.styled'
import { Heading } from '../ui'
import Movies from '../Movies/Movies'

export default function Detail() {
  const [movie, setMovie] = useState('')
  const { id } = useParams()
  const genres = movie && movie.genres.map((genre) => genre.name).join(', ')
  const idTrailer = movie && movie.videos.results[0]?.key

  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(id))
    setMovie(response.data)
  }

  useEffect(() => {
    getDetailMovie()
  }, [id])

  return (
    <>
      <StyledDetailMovie>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://placeholder.co/336x504?text=Poster'
            }
            alt={movie.original_title}
          />
        </div>
        <div>
          <Heading>{movie.title}</Heading>
          <h3>
            Genre : {genres} - {movie.vote_average?.toFixed(2)}
          </h3>
          <p>{movie.overview}</p>
          <a
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
            rel="noreferrer"
          >
            <button>Watch</button>
          </a>
        </div>
      </StyledDetailMovie>
    </>
  )
}
