import {
  LoginBackgroundContainer,
  LoginButton,
  LoginContainer,
  LoginInputContainer,
  LoginLogoContainer,
  LoginPanelContainer,
} from './styles'
import logoBranca from '../../assets/logo_branca.png'

export function Login() {
  return (
    <LoginContainer>
      <LoginBackgroundContainer></LoginBackgroundContainer>

      <LoginPanelContainer>
        <img src="" alt="" />
        <LoginLogoContainer src={logoBranca} />
        <LoginInputContainer>
          <label htmlFor="username">Usuário</label>
          <input id="username" type="text" placeholder="Username" />
        </LoginInputContainer>
        <LoginInputContainer>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Password" />
        </LoginInputContainer>
        <LoginButton>Login</LoginButton>
      </LoginPanelContainer>
    </LoginContainer>
  )
}
