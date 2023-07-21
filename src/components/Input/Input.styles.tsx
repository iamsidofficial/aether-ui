import styled from "@emotion/styled"
import { InputProps } from "./Input.types"
import { ComponentPropsWithoutRef } from "react"

export const StyledInput = styled.input<ComponentPropsWithoutRef<"input">>({
  width: "100%",
  boxSizing: "border-box",
  appearance: "none",
  border: "none",
  "&:focus": {
    outline: "none"
  }
})

export const StyledIcon = styled.span({
  width: "1rem",
  paddingRight: "0.2em",
  "*": {
    color: "#666"
  }
})

export const StyledInputContainer = styled.div<InputProps>(
  {
    fontSize: "0.9rem",
    padding: "0.6rem",
    height: "2rem",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    display: "flex",
    margin: 0,
    alignItems: "center",
    gap: "0.5em",
    "&:focus": {
      borderColor: "slateblue"
    },
    "*": {
      margin: 0,
      fontSize: "0.9rem"
    }
  },

  (props) => ({
    borderRadius: props.round ? props.round : "0.3em"
  })
)
