import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Treasure from 'components/Treasure'

const LoaderWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: #fffb;
    padding-bottom: 50px;
`

const Loader: React.FC = () => {
    return (
        <LoaderWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Treasure />
        </LoaderWrapper>
    )
}

export default Loader
