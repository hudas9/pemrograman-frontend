import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TopRatedMovies() {
  const [movie, setMovie] = useState('')
  const API_KEY = process.env.REACT_APP_API_KEY

  async function getTopRatedMovie() {
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    const response = await axios(URL)
    setMovie(response.data.results)
  }

  useEffect(() => {
    getTopRatedMovie()
  }, [])

  return (
    <>
      <Hero />
      <Movies movies={movie} title="Top Rated Movie" />
    </>
  )
}
