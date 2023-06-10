import { useEffect, useState } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'

function PopularMovie() {
  const [movie, setMovie] = useState('')

  async function getPopularMovie() {
    const response = await axios(ENDPOINTS.POPULAR)
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
