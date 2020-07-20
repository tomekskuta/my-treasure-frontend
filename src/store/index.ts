import { configureStore } from '@reduxjs/toolkit'

import gameStage from './gameStage'
import game, { GameStore } from './game'
import topScores from './topScores'

export interface Store {
    gameStage: GameStages
    game: GameStore
    topScores: TopScores
}

const store = configureStore({
    reducer: {
        gameStage: gameStage.reducer,
        game: game.reducer,
        topScores: topScores.reducer,
    },
})

export default store
