import StyledIDNProvinces from './IDNProvinces.styled'
import { Heading, SubHeading } from '../styled/ui-components'
import Table from '../Table/Table'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ENDPOINTS from '../../utils/constants/endpoints'

export default function IDNProvinces() {
  const [provinces, setProvinces] = useState([])

  async function fetchData() {
    const response = await axios.get(ENDPOINTS.INDONESIA)
    setProvinces(response.data.regions)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <StyledIDNProvinces>
      <section>
        <Heading>Situation by Provinces</Heading>
        <SubHeading>Covid Data By Province</SubHeading>
        <div>
          <Table data={provinces} />
        </div>
      </section>
    </StyledIDNProvinces>
  )
}
