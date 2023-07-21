import React from "react"
import { ButtonProps } from "./Button.types"
import StyledButton, { defaultStyleProps } from "./Button.styles"

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...{ ...defaultStyleProps, ...props }}>
      {children}
    </StyledButton>
  )
}
