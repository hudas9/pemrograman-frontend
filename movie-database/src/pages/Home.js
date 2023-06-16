import Hero from '../components/Hero/Hero'
import Movies from '../components/Movies/Movies'
import { useDispatch } from 'react-redux'
import { updateMovies } from '../features/moviesSlice'
import data from '../utils/constants/data'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateMovies(data))
  }, [])

  return (
    <>
      <Hero />
      <Movies title="Latest movie" />
    </>
  )
}
