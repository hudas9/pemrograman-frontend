import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  flex-basis: 100%;
  margin-bottom: 1.5rem;
  padding: 2rem;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 32px;
    font-weight: bold;
  }

  &:nth-child(1) > p {
    color: #06d6a0;
  }

  &:nth-child(2) > p {
    color: #118ab2;
  }

  &:nth-child(3) > p {
    color: #ef476f;
  }

  @media (min-width: 768px) {
    flex-basis: 40%;
    width: 200px;
    height: 200px;
    margin: 1rem;
  }

  @media (min-width: 992px) {
    min-width: 250px;
    min-height: 250px;
    flex-basis: 30%;
    margin: 2rem;
  }
`

export default StyledCard
