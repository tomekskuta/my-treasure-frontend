import React from 'react'
import styled from 'styled-components'

interface PlayHeader {
    userName: string
    score: number
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    & > div {
        max-width: 50%;
    }
`

const Label = styled.label`
    color: ${({ theme }) => theme.colors.blue};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
`

const Value = styled.p<{ textEnd?: boolean }>`
    text-align: ${({ textEnd }) => (textEnd ? 'end' : 'start')};
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkBlue};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const PlayHeader: React.FC<PlayHeader> = (props) => {
    const { userName, score } = props

    return (
        <Wrapper>
            <div>
                <Label>Player:</Label>
                <Value>{userName}</Value>
            </div>
            <div>
                <Label>Score:</Label>
                <Value textEnd>{score}</Value>
            </div>
        </Wrapper>
    )
}

export default PlayHeader
