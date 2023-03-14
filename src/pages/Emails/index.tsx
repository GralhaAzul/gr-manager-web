/* eslint-disable no-unused-vars */
import {
  faEye,
  faEyeSlash,
  faPencil,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useMemo, useState } from 'react'
import { EmailContainer, EmailItem, EmailTable } from './styles'

interface EmailProps {
  id: string
  name: string
  password: string
  email: string
  visible: number
}

export function Email() {
  const [inputPasswordVisible, setInputPasswordVisible] = useState(0)
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

  useEffect(() => {
    emails.forEach((email, index) => {
      const inputElement = document.getElementById(email.id) as HTMLInputElement

      inputElement.value = emails[index].password
    })
  }, [emails])

  function handleInputTypePassword(email: EmailProps) {
    email.visible = email.visible ? 0 : 1

    setEmails([...emails])
  }

  return (
    <EmailContainer>
      <h1>E-mails</h1>
      <EmailTable>
        <thead>
          <tr>
            <td>
              <button>
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
                  {inputPasswordVisible ? (
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
    </EmailContainer>
  )
}
