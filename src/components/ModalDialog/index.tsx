import { ReactNode } from 'react'
import { ModalDialogContainer } from './styles'

interface ModalDialogProps {
  children?: ReactNode
  id: string
  open?: boolean
}

export function ModalDialog({ id, children }: ModalDialogProps) {
  return (
    <ModalDialogContainer id={id} open={false}>
      {children}
    </ModalDialogContainer>
  )
}
