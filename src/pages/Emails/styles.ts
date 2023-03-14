import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const EmailContainer = styled.main`
  grid-area: main;
  padding: 10px;
  width: 100%;
  color: black;

  h1 {
    position: relative;
    color: ${defaultTheme['gray-600']};
    margin-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: ${defaultTheme['gray-300']};
      height: 1px;
      width: 100%;
    }
  }
`
export const EmailTable = styled.table`
  width: 100%;
  max-width: 900px;
  text-align: left;
  border-collapse: collapse;
  table-layout: auto;
  font-size: 16px;

  thead {
    position: relative;
    color: #efefef;

    tr {
      background: ${defaultTheme['gray-900']};

      th {
        height: 40px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: ${defaultTheme['gray-300']};
      height: 1px;
      width: 100%;
    }
  }

  tbody {
    color: #efefef;
    input {
      background: none;
      border: 0;
      color: #efefef;
    }

    tr {
      background: ${defaultTheme['gray-700']};

      td {
        height: 30px;
        padding: 0 10px;
      }

      &:hover {
        filter: brightness(1.2)
          drop-shadow(0 0 0.1rem ${defaultTheme['purple-600']});

        transition: brightness 0.5s;
      }
    }

    tr:nth-child(odd) {
      background: ${defaultTheme['gray-400']};
    }
  }
`
export const EmailItem = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
