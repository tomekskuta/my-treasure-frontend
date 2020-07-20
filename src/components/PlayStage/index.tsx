import React from 'react'
import { useSelector } from 'react-redux'

import PlayStage from './PlayStage'

const PlayStageContainer: React.FC = () => {
    const game = useSelector((state) => state.game.data)

    return <PlayStage game={game} />
}

export default PlayStageContainer
