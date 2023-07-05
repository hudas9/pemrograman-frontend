import styled from 'styled-components'

const StyledRegion = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  padding: 2rem;

  & > section > h2 {
    font-size: 36px;
    font-weight: bold;
    color: #06d6a0;
  }

  & > section > p {
    font-size: 18px;
    color: #118ab2;
  }

  & > section > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }

  @media (min-width: 992px) {
    width: 100%;
    padding: 2rem;
  }
`

export default StyledRegion
