import Colors from "../../styles/Colors"
import { StyledButtonProps } from "./Button.types"
export const getButtonStyles = ({
  variant,
  color,
  shade,
  size
}: StyledButtonProps) => {
  const selectedColor = Colors[color][shade]

  const hoverColor =
    variant === "filled"
      ? Colors[color][shade === 9 ? shade - 1 : shade + 1]
      : variant === "subtle"
      ? Colors[color][1]
      : Colors[color][0]

  const textColor = variant === "filled" ? "#fff" : selectedColor

  const backgroundColor =
    variant === "filled"
      ? selectedColor
      : variant === "subtle"
      ? Colors[color][0]
      : "#fff"

  const borderColor = variant === "outline" ? textColor : backgroundColor
  const fontSize = size === "md" ? "1rem" : size === "lg" ? "1.1rem" : "0.8rem"

  return { textColor, backgroundColor, borderColor, hoverColor, fontSize }
}
