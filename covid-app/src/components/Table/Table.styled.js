import styled from 'styled-components'

const Table = styled.table`
  margin-top: 2rem;
  width: 100%;
  border-collapse: collapse;

  th {
    color: #06d6a0;
  }

  td,
  th {
    border: 1px solid #64748b;
    padding: 0.25rem;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    margin: auto;
    margin-top: 2rem;
    width: 70%;
    border-collapse: collapse;
  }
`

export default Table
