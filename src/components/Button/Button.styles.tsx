import styled from "@emotion/styled"
import { StyledButtonProps } from "./Button.types"
import { getButtonStyles } from "./utils"

const StyledButton = styled.button<StyledButtonProps>(
  {
    fontFamily: "Arial, san-serif",
    fontWeight: 700,
    padding: "0.5em 0.8em",
    border: `1px solid`
  },

  (props) => {
    const { textColor, backgroundColor, borderColor, hoverColor, fontSize } =
      getButtonStyles(props)
    return {
      textTransform: props.uppercase ? "uppercase" : "none",
      fontSize: fontSize,
      borderRadius: props.round !== undefined ? props.round : "0.3em",
      cursor: props.disabled ? "not-allowed" : "pointer",
      color: textColor,
      backgroundColor: backgroundColor,
      opacity: props.disabled ? 0.5 : 1,
      borderColor: borderColor,

      "&:hover": {
        backgroundColor: hoverColor,
        borderColor: hoverColor
      }
    }
  }
)

export const defaultStyleProps: StyledButtonProps = {
  color: "blue",
  variant: "filled",
  shade: 7,
  size: "md"
}

export default StyledButton
