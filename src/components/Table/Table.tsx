import React from 'react'
import styled from 'styled-components'
import { tabletPortrait } from 'styles/mediaQueries'

interface Table {
    topScores: TopScores
    currentPlayerId: string
}

const StyledTable = styled.table`
    display: block;
    margin: 0 auto;
    max-width: 600px;
    border: 2px solid ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.darkBlue};
    border-spacing: 0;
`

const Td = styled.td<{ currentPlayer?: boolean }>`
    padding: 10px;
    text-align: start;
    display: table-cell;
    vertical-align: inherit;
    height: 50px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 20px;
    font-weight: ${({ currentPlayer }) => (currentPlayer ? 700 : 'normal')};
    background-color: ${({ currentPlayer, theme }) =>
        currentPlayer ? theme.colors.yellow : `${theme.colors.empty}4c`};
    border: ${({ currentPlayer, theme }) =>
        `${currentPlayer ? 3 : 1}px solid ${theme.colors.darkBlue}`};
    border-left: ${({ theme, currentPlayer }) =>
        currentPlayer ? `2px solid ${theme.colors.darkBlue}` : 'none'};
    border-right: ${({ theme, currentPlayer }) =>
        currentPlayer ? `2px solid ${theme.colors.darkBlue}` : 'none'};

    & div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & + & {
        width: 100%;
    }
    &:first-of-type {
        border-right: none;
    }

    &:nth-of-type(2) {
        border-left: none;
        border-right: none;
    }

    &:last-of-type {
        text-align: end;
        border-left: none;
    }

    @media ${tabletPortrait} {
        padding: 15px;
    }
`

const Tr = styled.tr`
    &:last-of-type ${Td} {
        border: none;
    }
`

const Th = styled((props) => <Td {...props} as="th" />)`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.darkBlue}`};
    background-color: ${({ theme }) => theme.colors.blue}4c;
`

const Table: React.FC<Table> = (props) => {
    const { topScores, currentPlayerId } = props

    return (
        <StyledTable>
            <thead>
                <Tr>
                    <Th>#</Th>
                    <Th>Name</Th>
                    <Th>Score</Th>
                </Tr>
            </thead>
            <tbody>
                {topScores.map(({ id, userName, score }, index) => {
                    const currentPlayer = id === currentPlayerId
                    return (
                        <Tr key={id}>
                            <Td currentPlayer={currentPlayer}>{index + 1}</Td>
                            <Td currentPlayer={currentPlayer}>
                                <div>{userName}</div>
                            </Td>
                            <Td currentPlayer={currentPlayer}>{score}</Td>
                        </Tr>
                    )
                })}
            </tbody>
        </StyledTable>
    )
}

export default Table
