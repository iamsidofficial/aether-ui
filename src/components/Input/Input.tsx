import { InputProps } from "./Input.types"
import { StyledInput, StyledInputContainer, StyledIcon } from "./Input.styles"
import { useState } from "react"

export const Input = ({ value, setValue, icon, ...props }: InputProps) => {
  const [inputValue, setInputValue] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(e.target.value)
    setInputValue(e.target.value)
  }

  return (
    <StyledInputContainer {...props}>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <StyledInput
        {...props}
        value={value || inputValue}
        onChange={(e) => handleChange(e)}
      />
    </StyledInputContainer>
  )
}
