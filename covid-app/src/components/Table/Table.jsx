import StyledTable from './Table.styled.js'

export default function Table({ data }) {
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
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.numbers.confirmed}</td>
              <td>{item.numbers.recovered}</td>
              <td>{item.numbers.treatment}</td>
              <td>{item.numbers.death}</td>
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
