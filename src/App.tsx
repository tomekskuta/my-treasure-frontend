import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import getGame from 'store/game/getGame'

import {
    Layout,
    InitStage,
    CreateStage,
    PlayStage,
    FinishStage,
} from 'components'

const GameStages: Record<GameStages, React.FC> = {
    init: InitStage,
    create: CreateStage,
    play: PlayStage,
    finish: FinishStage,
}

const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGame())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const currentStage = useSelector((state) => state.gameStage)

    const CurrentStageComponent = GameStages[currentStage]

    return (
        <Layout>
            <CurrentStageComponent />
        </Layout>
    )
}

export default App
