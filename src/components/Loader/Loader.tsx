import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
