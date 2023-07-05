import StyledGlobal from './Global.styled'
import { useState, useEffect } from 'react'
import ENDPOINTS from '../../utils/constants/endpoints'
import axios from 'axios'
import Card from '../Card/Card'
import { Heading, SubHeading } from '../styled'

const Global = () => {
  const [global, setGlobal] = useState([])

  const getData = async () => {
    const response = await axios.get(ENDPOINTS.GLOBAL)
    setGlobal(response.data.global)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <StyledGlobal>
      <section>
        <Heading>Global Situation</Heading>
        <SubHeading>Covid Data Based on Global Situation</SubHeading>
        <div>
          {global.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </section>
    </StyledGlobal>
  )
}

export default Global
