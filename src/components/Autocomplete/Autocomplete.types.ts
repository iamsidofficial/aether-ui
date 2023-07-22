import { InputProps } from "../Input/Input.types"

export interface AutocompleteProps extends InputProps {
  label?: string
  options?: string[]
  limit?: number
  placeholder?: string
}
