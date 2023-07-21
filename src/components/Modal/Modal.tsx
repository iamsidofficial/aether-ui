import React from "react"
import { ModalProps } from "./Modal.types"
import { StyledModal, SyledModalContainer } from "./Modal.styles"
import { Button } from ".."

export const Modal = ({ children, ...props }: ModalProps) => {
  const handleOutsideClick = () => {
    props.onClose()
  }

  const handleInsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <SyledModalContainer onClick={handleOutsideClick} {...props}>
      <Button size="lg" variant="ghost" onClick={props.onClose} round={30}>
        ×
      </Button>
      <StyledModal onClick={(e) => handleInsideClick(e)}>
        {children}
      </StyledModal>
    </SyledModalContainer>
  )
}
