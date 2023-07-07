import StyledIndonesia from './Indonesia.styled'
import ENDPOINTS from '../../utils/constants/endpoints'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Heading, SubHeading } from '../styled/ui-components'
import Card from '../Card/Card'

export default function Indonesia() {
  const [indonesia, setIndonesia] = useState([])

  async function fetchData() {
    const response = await axios.get(ENDPOINTS.INDONESIA)
    setIndonesia(response.data.indonesia)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <StyledIndonesia>
      <section>
        <Heading>Indonesia Situation</Heading>
        <SubHeading>Covid Data Based on Indonesia</SubHeading>
        <div>
          {indonesia.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </section>
    </StyledIndonesia>
  )
}
