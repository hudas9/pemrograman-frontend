import { useEffect } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'
import { useDispatch } from 'react-redux'
import { updateMovies } from '../../features/moviesSlice'

function PopularMovie() {
  const dispatch = useDispatch()

  async function getPopularMovie() {
    const response = await axios(ENDPOINTS.POPULAR)
    dispatch(updateMovies(response.data.results))
  }

  useEffect(() => {
    getPopularMovie()
  }, [])

  return (
    <>
      <Hero />
      <Movies title="Popular Movie" />
    </>
  )
}

export default PopularMovie
