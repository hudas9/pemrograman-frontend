import StyledProvince from './Province.styled'
import { useSelector } from 'react-redux'
import { Heading, SubHeading } from '../styled'
import Table from '../Table/Table'

export default function Province() {
  const provinces = useSelector((state) => state.provinces.provinces)

  return (
    <StyledProvince>
      <section>
        <Heading>Province</Heading>
        <SubHeading>Covid Data By Province</SubHeading>
        <div>
          <Table data={provinces} />
        </div>
      </section>
    </StyledProvince>
  )
}
