import StyledCard from './Card.styled'

export default function Card({ item }) {
  return (
    <StyledCard>
      <h2>{item.status}</h2>
      <p>{item.total.toLocaleString('id-ID')}</p>
    </StyledCard>
  )
}
