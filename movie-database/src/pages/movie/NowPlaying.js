import Hero from '../../components/Hero/Hero'
import Movies from '../../components/Movies/Movies'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Nowplaying() {
  const [movie, setMovie] = useState('')
  const API_KEY = process.env.REACT_APP_API_KEY

  async function getNowPlayingMovie() {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    const response = await axios(URL)
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
