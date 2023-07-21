import React, { ComponentPropsWithoutRef } from "react"
import { ColorType } from "../../styles/Colors"
type VariantType = "filled" | "subtle" | "outline" | "ghost"
type SizeType = "sm" | "md" | "lg"

export type { ColorType }

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  uppercase?: boolean
  disabled?: boolean
  variant?: VariantType
  size?: SizeType
  color?: ColorType
  children?: React.ReactNode
  shade?: number
  round?: number
}

export interface StyledButtonProps extends ButtonProps {
  color: ColorType
  variant: VariantType
  shade: number
  size: SizeType
}
