import { MenuContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faBox } from '@fortawesome/free-solid-svg-icons'

export function Menu() {
  return (
    <MenuContainer>
      <h1>Menu</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faNetworkWired} size="sm" />
        </li>
        <li>
          <FontAwesomeIcon icon={faBox} size="sm" />
        </li>
      </ul>
    </MenuContainer>
  )
}
