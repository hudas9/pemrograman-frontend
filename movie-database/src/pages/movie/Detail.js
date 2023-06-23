import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import DetailMovie from '../../components/DetailMovie/DetailMovie'
import Movies from '../../components/Movies/Movies'
import { useDispatch } from 'react-redux'
import { updateMovies } from '../../features/moviesSlice'

export default function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()

  async function getRecomendationsMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id))
    dispatch(updateMovies(response.data.results))
  }

  useEffect(() => {
    getRecomendationsMovies()
  }, [id])

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendations Movie" />
    </>
  )
}
