import { useEffect, useState } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'
import { useDispatch } from 'react-redux'
import { updateMovies } from '../../features/moviesSlice'

export default function TopRatedMovies() {
  const dispatch = useDispatch()

  async function getTopRatedMovie() {
    const response = await axios(ENDPOINTS.TOP_RATED)
    dispatch(updateMovies(response.data.results))
  }

  useEffect(() => {
    getTopRatedMovie()
  }, [])

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movie" />
    </>
  )
}
