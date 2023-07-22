import { ComponentPropsWithoutRef } from "react"

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  icon?: React.ReactNode
  round?: number
  setValue?: (s: string) => void
  value?: string | number
  type?: React.HTMLInputTypeAttribute
}
