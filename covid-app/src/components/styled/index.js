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

export { Heading, SubHeading, Alert }
