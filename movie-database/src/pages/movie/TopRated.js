import { useEffect, useState } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'

export default function TopRatedMovies() {
  const [movie, setMovie] = useState('')

  async function getTopRatedMovie() {
    const response = await axios(ENDPOINTS.TOP_RATED)
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
