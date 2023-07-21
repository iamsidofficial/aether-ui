import styled from "@emotion/styled"
import { ModalProps } from "./Modal.types"

export const SyledModalContainer = styled.div<ModalProps>(
  {
    position: "fixed",
    top: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    visibility: "hidden",
    transition: "all 0.3s ease",
    backdropFilter: "blur(1px)"
  },

  (props) => {
    return (
      props.isOpen && {
        visibility: "visible",
        opacity: 1
      }
    )
  }
)

export const StyledModal = styled.div({
  backgroundColor: "#fff",
  padding: "1em",
  borderRadius: "0.5em",
  width: "fit-content"
})
