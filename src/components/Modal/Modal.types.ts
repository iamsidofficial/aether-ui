import React, { ComponentPropsWithoutRef } from "react"

export interface ModalProps extends ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode
  isOpen: boolean
  onClose: () => void
}
