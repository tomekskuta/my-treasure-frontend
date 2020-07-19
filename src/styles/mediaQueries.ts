import { DefaultTheme } from 'styled-components'

interface StyledProp {
    theme: DefaultTheme
}

export const tabletPortrait = ({ theme }: StyledProp): string =>
    theme.mediaQueries.tabletPortrait

export const tabletLandscape = ({ theme }: StyledProp): string =>
    theme.mediaQueries.tabletLandscape

export const desktop = ({ theme }: StyledProp): string =>
    theme.mediaQueries.desktop

export const bigDesktop = ({ theme }: StyledProp): string =>
    theme.mediaQueries.bigDesktop
