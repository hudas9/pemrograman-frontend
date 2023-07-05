import styled from 'styled-components'

const StyledGlobal = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;

  & > section > h2 {
    font-size: 2.441rem;
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

    & > section > div {
      flex-wrap: nowrap;
    }
  }
`

export default StyledGlobal
