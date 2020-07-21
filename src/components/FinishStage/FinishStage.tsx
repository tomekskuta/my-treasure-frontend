import React from 'react'
import styled from 'styled-components'

import { Treasure, Table, Board, Button } from 'components'

interface FinishStage {
    currentPlayerId: string
    topScores: TopScores
    revealedFields: RevealedField[]
    onClickPlayAgain: () => void
}

const H1 = styled.h1`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    & > div {
        margin: 0 20px;
    }
`

const H2 = styled.h2`
    margin: 70px auto 30px;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: center;
`

const PlayAgainButton = styled((props) => <Button {...props} />)`
    margin: 50px auto 0;
`

const FinishStage: React.FC<FinishStage> = (props) => {
    const {
        topScores,
        currentPlayerId,
        revealedFields,
        onClickPlayAgain,
    } = props

    return (
        <>
            <H1>
                <Treasure width={[25, 'px']} />
                <div>You won!</div>
                <Treasure width={[25, 'px']} />
            </H1>
            <Table currentPlayerId={currentPlayerId} topScores={topScores} />
            <H2>Your game:</H2>
            <Board
                finishStage
                checkedFields={[]}
                revealedFields={revealedFields}
                onClickField={() => {}}
            />
            <PlayAgainButton onClick={onClickPlayAgain}>
                Play again
            </PlayAgainButton>
        </>
    )
}

export default FinishStage
