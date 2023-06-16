import { useState, useEffect } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import StyledHero from './Hero.styled'
import { Heading } from '../ui'

export default function Hero() {
  const [movie, setMovie] = useState('')
  const genres = movie && movie.genres.map((genre) => genre.name).join(', ')
  const idTrailer = movie && movie.videos.results[0].key

  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING)
    return response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ]
  }

  async function getDetail() {
    const movie = await getTrendingMovie()
    const idMovie = movie.id
    const response = await axios(ENDPOINTS.DETAIL(idMovie))
    setMovie(response.data)
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <StyledHero>
      <div>
        <Heading>{movie.title}</Heading>
        <h3>Genre : {genres}</h3>
        <p>{movie.overview}</p>
        <a
          href={`https://www.youtube.com/watch?v=${idTrailer}`}
          target="_blank"
          rel="noreferrer"
        >
          <button>Watch</button>
        </a>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.original_title}
        />
      </div>
    </StyledHero>
  )
}
