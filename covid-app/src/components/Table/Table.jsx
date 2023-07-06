import StyledTable from './Table.styled.js'

export default function Table({ data }) {
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>No.</th>
          <th>Province</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Treatment</th>
          <th>Death</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.numbers.confirmed.toLocaleString('id-ID')}</td>
              <td>{item.numbers.recovered.toLocaleString('id-ID')}</td>
              <td>{item.numbers.treatment.toLocaleString('id-ID')}</td>
              <td>{item.numbers.death.toLocaleString('id-ID')}</td>
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
