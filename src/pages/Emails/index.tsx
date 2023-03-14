/* eslint-disable no-unused-vars */
import {
  faClose,
  faEye,
  faEyeSlash,
  faPencil,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { EmailContainer, EmailItem, EmailTable } from './styles'

import { ModalDialog } from '../../components/ModalDialog'

interface EmailProps {
  id: string
  name: string
  password: string
  email: string
  visible: number
}

export function Email() {
  const [emails, setEmails] = useState([
    {
      id: '1',
      name: 'Renato Yoiti',
      email: 'informatica@gralha-azul.ind.br',
      password: 'kmof7yq34mY&NTOIM<',
      visible: 0,
    },
    {
      id: '2',
      name: 'Michael Almeida',
      email: 'informatica2@gralha-azul.ind.br',
      password: 'kP<M*YTNB&%¨RBNjhb.24',
      visible: 0,
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  useEffect(() => {
    emails.forEach((email, index) => {
      const inputElement = document.getElementById(email.id) as HTMLInputElement

      inputElement.value = emails[index].password
    })
  }, [emails])

  /* Input Functions */
  function handleInputTypePassword(email: EmailProps) {
    email.visible = email.visible ? 0 : 1

    setEmails([...emails])
  }

  /* Modal Functions */
  function handleShowModalDialog(id: string) {
    const modalDialog = document.getElementById(id) as HTMLDialogElement

    modalDialog.showModal()
  }

  function handleCloseModalDialog(id: string) {
    const modalDialog = document.getElementById(id) as HTMLDialogElement

    modalDialog.close()
  }

  /* Form */
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <EmailContainer>
      <h1>E-mails</h1>
      <EmailTable>
        <thead>
          <tr>
            <td>
              <button
                onClick={() => handleShowModalDialog('createEmailDialog')}
              >
                <FontAwesomeIcon icon={faPlus} size="sm" color={'green'} />
              </button>
            </td>
          </tr>
          <tr>
            <th></th>
            <th>E-mail</th>
            <th>Usuario</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>
                <FontAwesomeIcon icon={faPencil} size="sm" />
                <FontAwesomeIcon icon={faTrash} size="sm" />
              </td>
              <td>{email.email}</td>
              <td>{email.name}</td>
              <EmailItem>
                <input
                  id={email.id}
                  type={email.visible ? 'text' : 'password'}
                  readOnly
                  disabled
                />
                <button onClick={() => handleInputTypePassword(email)}>
                  {email.visible ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      size="sm"
                      color={'black'}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faEye} size="sm" color={'black'} />
                  )}
                </button>
              </EmailItem>
            </tr>
          ))}
        </tbody>
      </EmailTable>
      <ModalDialog id="createEmailDialog">
        <header>
          <h1>teste</h1>
          <button onClick={() => handleCloseModalDialog('createEmailDialog')}>
            <FontAwesomeIcon icon={faClose} size="lg" />
          </button>
        </header>
        <main>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" value={inputName} />
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" value={inputEmail} />
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" value={inputPassword} />
          </form>
        </main>
      </ModalDialog>
    </EmailContainer>
  )
}
