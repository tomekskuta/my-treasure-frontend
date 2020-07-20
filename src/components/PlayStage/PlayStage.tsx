import React from 'react'

import { PlayHeader, Board, Button } from 'components'

interface PlayStage {
    game: Game
}

const PlayStage: React.FC<PlayStage> = (props) => {
    const { game } = props
    const { userName, score } = game

    return (
        <div>
            <PlayHeader userName={userName} score={score} />
            <Board />
        </div>
    )
}

export default PlayStage
