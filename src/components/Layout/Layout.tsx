import React from 'react'
import styled from 'styled-components'

import { tabletPortrait } from 'styles/mediaQueries'

const LayoutWrapper = styled.div`
    padding: 25px;

    @media ${tabletPortrait} {
        padding: 50px;
    }
`

const Layout: React.FC = (props) => {
    const { children } = props

    return <LayoutWrapper>{children}</LayoutWrapper>
}

export default Layout
