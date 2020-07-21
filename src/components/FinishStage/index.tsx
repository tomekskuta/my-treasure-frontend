import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FinishStage from './FinishStage'

import { setStage } from 'store/gameStage'

const FinishStageContainer = () => {
    const dispatch = useDispatch()

    const currentGame = useSelector((store) => store.game.data)
    const topScores = useSelector((store) => store.topScores)

    const onClickPlayAgain = () => {
        dispatch(setStage('create'))
    }

    return (
        <FinishStage
            currentPlayerId={currentGame.id}
            topScores={topScores}
            revealedFields={currentGame.revealedFields}
            onClickPlayAgain={onClickPlayAgain}
        />
    )
}

export default FinishStageContainer
