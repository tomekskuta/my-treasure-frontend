import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
        font-family: sans-serif;
        font-weight: 400;
    }

`

export default GlobalStyles
