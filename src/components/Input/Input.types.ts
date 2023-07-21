import React, { ComponentPropsWithoutRef } from "react"

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  icon?: React.ReactNode
  round?: number
}
