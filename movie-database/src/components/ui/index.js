import styled, { css } from "styled-components"

const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors["primary"]};
  cursor: pointer;
  &:hover {
    background-color: ${({ variant, theme }) =>
      theme.hoverColors[variant] || theme.hoverColors["primary"]};
  }

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}

  font-size: ${({ size, theme }) =>
    theme.fontSize[size] || theme.fontSize["md"]};
  padding: ${({ size, theme }) => theme.padding[size] || theme.padding["md"]};
`

const Heading = styled.h2`
  color: #06d6a0;
  font-size: 2.44rem;
`

const Text = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`

const Form = styled.form`
  max-width: 349px;
  margin: auto;
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
  font-family: "Poppins";
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 25px;
`

export { Button, Heading, Text, Form, Label, Input, Image }
