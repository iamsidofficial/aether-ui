import React from "react"
import { InputProps } from "./Input.types"
import { StyledInput, StyledInputContainer, StyledIcon } from "./Input.styles"
import { useState } from "react"

export const Input = ({ icon, ...props }: InputProps) => {
  const [inputValue, setInputValue] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledInputContainer {...props}>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <StyledInput
        {...props}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </StyledInputContainer>
  )
}
