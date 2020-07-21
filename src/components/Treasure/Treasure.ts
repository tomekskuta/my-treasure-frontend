import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Treasure {
    width?: [number, string]
}

const getValue = (multiplier = 1) => ({ width }: Treasure): string =>
    width ? `${multiplier * width[0]}${width[1]}` : `${multiplier * 50}px`

const Treasure = styled(motion.div).attrs((props) => ({
    animate: {
        scale: [1, 0.7, 1],
    },
    transition: {
        loop: Infinity,
        duration: 1.5,
        ease: 'linear',
    },
}))<Treasure>`
    width: 0;
    height: 0;
    border: ${getValue()} solid transparent;
    border-bottom: ${getValue(7 / 5)} solid
        ${({ theme }) => theme.colors.yellow};
    position: relative;
    top: ${getValue(-1)};

    &:after {
        content: '';
        position: absolute;
        left: ${getValue(-1)};
        top: ${getValue(7 / 5)};
        width: 0;
        height: 0;
        border: ${getValue()} solid transparent;
        border-top: ${getValue(7 / 5)} solid
            ${({ theme }) => theme.colors.yellow};
    }
`

export default Treasure
