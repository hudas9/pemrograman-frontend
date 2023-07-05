import styled from 'styled-components'

const StyledIndonesia = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  text-align: center;
  margin-top: 3rem;
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

  & > section > div > div {
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    flex-basis: 100%;
    margin-bottom: 1.5rem;
    padding: 2rem;
    width: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > section > div > div > h2 {
    text-transform: capitalize;
  }

  & > section > div > div:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }

  & > section > div > div > p {
    font-size: 32px;
    font-weight: bold;
  }

  & > section > div > div:nth-child(1) p {
    color: #06d6a0;
  }

  & > section > div > div:nth-child(2) p {
    color: #118ab2;
  }

  & > section > div > div:nth-child(3) p {
    color: #ef476f;
  }

  @media (min-width: 768px) {
    & > section > div > div {
      flex-basis: 40%;
      width: 200px;
      height: 200px;
      margin: 1rem;
    }
  }

  @media (min-width: 992px) {
    width: 100%;
    padding: 2rem;

    & > section > div {
      flex-wrap: nowrap;
    }

    & > section > div > div {
      min-width: 250px;
      min-height: 250px;
      flex-basis: 30%;
      margin: 2rem;
    }
  }
`

export default StyledIndonesia
