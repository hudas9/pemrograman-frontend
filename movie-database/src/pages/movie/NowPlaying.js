import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'
import { useEffect } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import { useDispatch } from 'react-redux'
import { updateMovies } from '../../features/moviesSlice'

export default function Nowplaying() {
  const dispatch = useDispatch()

  async function getNowPlayingMovie() {
    const response = await axios(ENDPOINTS.NOW_PLAYING)
    dispatch(updateMovies(response.data.results))
  }

  useEffect(() => {
    getNowPlayingMovie()
  }, [])

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  )
}
