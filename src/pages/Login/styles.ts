import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import signInBackgroundImage from '../../assets/sign-in-background.png'

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 10fr 2fr;
  height: calc(100vh);
  grid-template-areas: 'background login-panel';
  background-color: ${defaultTheme.white};
`
export const LoginBackgroundContainer = styled.div`
  grid-area: background;
  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`

export const LoginPanelContainer = styled.div`
  grid-area: login-panel;
  background: linear-gradient(
    166.56deg,
    rgba(30, 14, 75, 1) 0%,
    rgba(1, 0, 74, 0.47) 100%
  );
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginLogoContainer = styled.img`
  height: 2rem;
  width: 10rem;
  margin-bottom: 10px;
`
export const LoginInputContainer = styled.div`
  margin-bottom: 10px;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 8px;
  color: ${defaultTheme.white};
  background: ${defaultTheme['purple-900']};
  border: 0;
  &:hover {
    box-shadow: 0 0 2px white;
  }
`
