import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100%;
  height: calc(100vh);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 11fr;
  grid-template-areas:
    'menu header'
    'menu main';
`
