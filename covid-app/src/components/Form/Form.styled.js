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

  label {
    display: block;
    text-align: left;
    color: #64748b;
  }

  select,
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #06d6a0;
    border-radius: 5px;
    font-family: 'Poppins';
  }

  select:focus,
  input:focus {
    border-radius: 5px;
    outline: 2px solid #08c290;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    background-color: #06d6a0;
    color: #fff;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  button:hover {
    background-color: #08c290;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }

  option {
    text-transform: capitalize;
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
