import {
  MenuContainer,
  MenuLogo,
  MenuList,
  MenuLogoContainer,
  MenuSubList,
  MenuSubListContainer,
  MenuListItem,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNetworkWired,
  faBox,
  faEnvelope,
  faPrint,
} from '@fortawesome/free-solid-svg-icons'

import logoGRWhite from '../../assets/Logo_Gralha_White.svg'

export function Menu() {
  return (
    <MenuContainer>
      <MenuLogoContainer>
        <MenuLogo src={logoGRWhite} alt="" />
      </MenuLogoContainer>

      <MenuList>
        <MenuListItem>
          <FontAwesomeIcon icon={faNetworkWired} size="sm" />
          <MenuSubListContainer>
            <MenuSubList>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faPrint} size="sm" />
                  Impressoras
                </a>
              </li>
            </MenuSubList>
          </MenuSubListContainer>
        </MenuListItem>
        <MenuListItem>
          <FontAwesomeIcon icon={faBox} size="sm" />
          <MenuSubListContainer>
            <MenuSubList>
              <li>
                <a href="/emails">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />
                  E-mails
                </a>
              </li>
            </MenuSubList>
          </MenuSubListContainer>
        </MenuListItem>
      </MenuList>
    </MenuContainer>
  )
}
