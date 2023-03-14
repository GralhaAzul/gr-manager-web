import styled from 'styled-components'

export const ModalDialogContainer = styled.dialog`
  position: fixed;
  z-index: 99999;
  max-width: 650px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  overflow: auto;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  top: 500;

  margin: auto;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  header {
    position: relative;

    button {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
