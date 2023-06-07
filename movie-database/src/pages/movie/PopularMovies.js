import { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'

function PopularMovie() {
  const [movie, setMovie] = useState('')

  async function getPopularMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    const response = await axios(URL)
    setMovie(response.data.results)
  }

  useEffect(() => {
    getPopularMovie()
  }, [])

  return (
    <>
      <Hero />
      <Movies movies={movie} title="Popular Movie" />
    </>
  )
}

export default PopularMovie
