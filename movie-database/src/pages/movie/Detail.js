import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'
import DetailMovie from '../../components/DetailMovie/DetailMovie'

export default function Detail() {
  const [movie, setMovie] = useState('')
  const { id } = useParams()

  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(id))
    setMovie(response.data)
  }

  useEffect(() => {
    getDetailMovie()
  }, [id])

  return (
    <>
      <DetailMovie movie={movie} />
    </>
  )
}
