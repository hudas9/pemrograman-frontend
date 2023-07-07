import styled from 'styled-components'

const StyledForm = styled.div`
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  margin-top: 3rem;
  text-align: center;
  padding-bottom: 3rem;

  img {
    display: none;
  }

  form {
    max-width: 250px;
    margin: auto;
    margin-top: 1rem;
  }

  form div {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 992px) {
    padding: 3rem;

    section {
      display: flex;
      justify-content: space-evenly;
    }

    img {
      max-width: 100%;
      height: 100%;
      border-radius: 25px;
      margin-bottom: 1rem;
      display: block;
    }
  }
`

export default StyledForm
