import StyledRegion from './Region.styled'
import { useState, useEffect } from 'react'
import ENDPOINTS from '../../utils/constants/endpoints'
import axios from 'axios'
import { Heading, SubHeading } from '../styled/ui-components'
import CardRegion from '../CardRegion/CardRegion'

const Region = () => {
  const [region, setRegion] = useState([])

  const getData = async () => {
    const response = await axios.get(ENDPOINTS.GLOBAL)
    setRegion(response.data.regions)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <StyledRegion>
      <section>
        <Heading>Situation by Regions</Heading>
        <SubHeading>Covid Data Based on Region</SubHeading>
        <div>
          {region.map((item, index) => (
            <CardRegion key={index} item={item} />
          ))}
        </div>
      </section>
    </StyledRegion>
  )
}

export default Region
