import 'styled-components'
import 'react-redux'
import { Theme } from 'styles/theme'
import { Store } from 'store'

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

declare module 'react-redux' {
    export interface DefaultRootState extends Store {}
}
