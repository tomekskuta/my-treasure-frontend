export enum breakpoint {
    tabletPortrait = '600px',
    tabletLandscape = '900px',
    desktop = '1200px',
    bigDesktop = '1800px',
}

type MediaQueries = Record<keyof typeof breakpoint, string>
const mediaQueries: MediaQueries = Object.entries(breakpoint).reduce(
    (acc, [key, value]) => ({
        ...acc,
        [key]: `(min-width: ${value})`,
    }),
    breakpoint
)

export enum color {
    red = '#931621',
    darkBlue = '#28464B',
    blue = '#2C8C99',
}

export interface Theme {
    breakpoints: typeof breakpoint
    mediaQueries: MediaQueries
    colors: typeof color
}

const theme: Theme = { breakpoints: breakpoint, mediaQueries, colors: color }

export default theme
