import { useDispatch } from 'react-redux'
import Hero from '../components/Hero/Hero'
import Movies from '../components/Movies/Movies'
import { updateMovies } from '../features/moviesSlice'
import { useSelector } from 'react-redux'
import data from '../utils/constants/data'

export default function Home() {
  const dispatch = useDispatch()
  const movies = useSelector((store) => store.movies.movies)

  dispatch(updateMovies(movies))

  return (
    <>
      <Hero />
      <Movies title="Latest movie" />
    </>
  )
}
