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
    black = '#000000',
    red = '#931621',
    darkBlue = '#28464B',
    blue = '#2C8C99',
    yellow = '#f1c40f',

    status = '#764134',
    covered = '#ad8350',
    empty = '#cfc7a0',
    checked = '#2a1a1f',
}

export interface Theme {
    breakpoints: typeof breakpoint
    mediaQueries: MediaQueries
    colors: typeof color
}

const theme: Theme = { breakpoints: breakpoint, mediaQueries, colors: color }

export default theme
