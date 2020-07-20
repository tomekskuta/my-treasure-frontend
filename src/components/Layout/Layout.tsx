import React from 'react'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
    padding: 25px;
    width: 100%;
`

const Layout: React.FC = (props) => {
    const { children } = props

    return <LayoutWrapper>{children}</LayoutWrapper>
}

export default Layout
