import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import DetailMovie from '../../components/DetailMovie/DetailMovie'
import Movies from '../../components/Movies/Movies'

export default function Detail() {
  const [movies, setMovies] = useState('')
  const { id } = useParams()

  async function getRecomendationsMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id))
    setMovies(response.data.results)
  }

  useEffect(() => {
    getRecomendationsMovies()
  }, [id])

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendations Movie" />
    </>
  )
}
