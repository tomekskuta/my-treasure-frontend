import { css } from 'styled-components'

export const statusStyles = {
    C: css`
        background-color: ${({ theme }) => theme.colors.covered};
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.03);
        }
    `,
    E: css`
        background-color: ${({ theme }) => theme.colors.empty};
    `,
    1: css`
        background-color: ${({ theme }) => `${theme.colors.status}66`};
    `,
    2: css`
        background-color: ${({ theme }) => `${theme.colors.status}b2`};
    `,
    3: css`
        background-color: ${({ theme }) => theme.colors.status};
    `,
    T: css`
        background-color: ${({ theme }) => theme.colors.blue};
    `,
}

export const checkedStyles = css`
    background-color: ${({ theme }) => theme.colors.checked};
`
