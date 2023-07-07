import styled from 'styled-components'

const Heading = styled.h2`
  font-size: 2.441rem;
  color: ${({ color, theme }) =>
    color ? theme.colors[secondary] : theme.colors.primary};
  text-align: ${({ sm }) => (sm ? sm : 'center')};

  @media (min-width: 992px) {
    text-align: ${({ align }) => (align ? align : 'center')};
  }
`

const SubHeading = styled.p`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.secondary};
  margin-bottom: 1rem;
  text-align: ${({ sm }) => (sm ? sm : 'center')};

  @media (min-width: 992px) {
    text-align: ${({ align }) => (align ? align : 'center')};
  }
`

const Alert = styled.p`
  text-align: left;
  color: ${({ color, theme }) => theme.colors[color] || theme.colors['danger']};
  font-size: small;
`

const Image = styled.img`
  width: ${(props) => props.w || 'auto'};
  max-width: ${(props) => props.maxWidth || '100%'};
  height: auto;
  margin-bottom: ${(props) => props.mb || '0'};
  border-radius: ${(props) => props.radius || '0'};
  display: ${(props) => props.display || 'block'};
  margin: ${(props) => props.margin || 'auto'};
`

const Label = styled.label`
  display: block;
  text-align: left;
  color: #64748b;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #06d6a0;
  border-radius: 5px;
  font-family: 'Poppins';

  &:focus {
    outline: 2px solid #08c290;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

const Button = styled.button`
  width: ${(props) => props.w || 'auto'};
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #06d6a0;
  color: #fff;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #08c290;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #06d6a0;
  border-radius: 5px;
  font-family: 'Poppins';

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

  &:focus {
    outline: 2px solid #08c290;
  }
`

const Option = styled.option`
  text-transform: capitalize;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`

const Text = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
  width: 70%;
  margin: auto;

  @media (min-width: 992px) {
    width: 100%;
  }
`

export {
  Heading,
  SubHeading,
  Alert,
  Image,
  Label,
  Input,
  Select,
  Option,
  Button,
  Text,
}
