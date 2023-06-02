import StyledHero from './Hero.styled'
import { useState, useEffect } from 'react'
import { Heading } from '../ui'
import axios from 'axios'

export default function Hero() {
  const [movie, setMovie] = useState({})
  const API_KEY = process.env.REACT_APP_API_KEY
  const genres = movie.genres?.map((genre) => genre.name).join(', ')
  const idTrailer = movie.videos?.results[0].key

  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    const response = await axios(URL)
    return response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ]
  }

  async function getDetails() {
    const movie = await getTrendingMovie()
    const idMovie = movie.id
    const URL = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}&append_to_response=videos`
    const response = await axios(URL)
    setMovie(response.data)
  }

  useEffect(() => {
    getDetails()
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
