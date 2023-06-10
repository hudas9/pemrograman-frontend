import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
export default function Nowplaying() {
  const [movie, setMovie] = useState('')

  async function getNowPlayingMovie() {
    const response = await axios(ENDPOINTS.NOW_PLAYING)
    setMovie(response.data.results)
  }

  useEffect(() => {
    getNowPlayingMovie()
  }, [])

  return (
    <>
      <Hero />
      <Movies movies={movie} title="Now Playing" />
    </>
  )
}
