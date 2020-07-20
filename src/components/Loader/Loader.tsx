import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LoaderWrapper = styled(motion.div)`
    min-height: 300px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledLoader = styled(motion.div).attrs(() => ({}))`
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 70px solid ${({ theme }) => theme.colors.yellow};
    position: relative;
    top: -50px;

    &:after {
        content: '';
        position: absolute;
        left: -50px;
        top: 70px;
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-top: 70px solid ${({ theme }) => theme.colors.yellow};
    }
`

const Loader: React.FC = () => {
    return (
        <LoaderWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <StyledLoader
                animate={{
                    rotate: 360,
                    scale: [1, 0.7, 1],
                }}
                transition={{
                    loop: Infinity,
                    duration: 1.5,
                    ease: 'linear',
                }}
                style={{ originY: 1 }}
            />
        </LoaderWrapper>
    )
}

export default Loader
