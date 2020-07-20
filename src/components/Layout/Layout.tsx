import React from 'react'
import { useSelector } from 'react-redux'

import Loader from '../Loader'

const Layout: React.FC = (props) => {
    const { children } = props

    const loading = useSelector((state) => state.game.loading)

    return (
        <div>
            {loading && <Loader />}
            {children}
        </div>
    )
}

export default Layout
