import styled, { keyframes } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const subMenuAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`

export const MenuContainer = styled.nav`
  grid-area: menu;
  background: linear-gradient(
    166.95deg,
    rgba(30, 14, 75, 1),
    rgba(1, 0, 74, 0.47)
  );

  display: flex;
  align-items: center;
  flex-direction: column;
`
export const MenuLogoContainer = styled.div`
  margin-bottom: 1rem;
  padding: 4px;
`

export const MenuLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  position: relative;
  width: 100%;
  margin-bottom: 4px;

  &:hover {
    cursor: pointer;

    svg {
      color: white;
    }

    div {
      pointer-events: all;
      opacity: 1;
      transition: opacity 0.6s linear;
    }
  }
`

export const MenuSubListContainer = styled.div`
  display: flex;
  left: 100%;
  opacity: 0;
  top: 0;
  position: absolute;
  flex-direction: row;
  min-width: 100px;
  background: ${defaultTheme['purple-500']};
  padding: 8px;
  border-radius: 0px 4px 4px 0px;
  pointer-events: none;
`

export const MenuSubList = styled.ul`
  word-wrap: unset;
  list-style: none;
  white-space: nowrap;
  width: 100%;
  /* gap: 4px; */

  li {
    font-size: 0.8rem;
    word-wrap: unset;
    min-height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;

    &:hover {
      background: ${defaultTheme['purple-600']};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 100%;
      color: ${defaultTheme['gray-100']};

      svg {
        margin-right: 6px;
      }

      &:hover {
        color: white;
      }
    }
  }
`
