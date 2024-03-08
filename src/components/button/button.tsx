'use client'

import styled from "styled-components"

interface Props {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}
export default function Button({name, background, border, color, icon}: Props) {
  return <ButtonStyled style={{
    background: background,
    color: color,
    border: border,
  }}>
    {
      icon && icon
    }
    {name}
  </ButtonStyled>
}

const ButtonStyled = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 2px solid var(--color-border);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-border);
    color: white;
  }
`