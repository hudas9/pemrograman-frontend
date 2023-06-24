import { useDispatch } from 'react-redux'
import Hero from '../components/Hero/Hero'
import Movies from '../components/Movies/Movies'
import { updateMovies } from '../features/moviesSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useDispatch()
  const moviesLocal = useSelector((store) => store.movies.moviesLocal)

  useEffect(() => {
    dispatch(updateMovies(moviesLocal))
  }, [])

  return (
    <>
      <Hero />
      <Movies title="Latest movie" />
    </>
  )
}
