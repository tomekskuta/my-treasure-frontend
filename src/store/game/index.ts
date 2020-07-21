import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import getGame from './getGame'
import createGame from './createGame'
import updateGame from './updateGame'

export interface GameStore {
    loading: boolean
    data: Game
}

const initialState: GameStore = {
    loading: true,
    data: {
        id: '',
        userName: '',
        score: 0,
        finished: false,
        revealedFields: [],
    },
}

const pending = (state: GameStore): GameStore => ({
    loading: true,
    data: state.data,
})

const fulfilled = (
    state: GameStore,
    action: PayloadAction<Game>
): GameStore => ({
    loading: false,
    data: action.payload,
})

const rejected = (state: GameStore): GameStore => ({
    loading: false,
    data: state.data,
})

const gameSlice = createSlice<GameStore, {}>({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getGame.pending, pending)
            .addCase(getGame.fulfilled, fulfilled)
            .addCase(getGame.rejected, rejected)
            .addCase(createGame.pending, pending)
            .addCase(createGame.fulfilled, fulfilled)
            .addCase(createGame.rejected, rejected)
            .addCase(updateGame.pending, pending)
            .addCase(updateGame.fulfilled, fulfilled)
            .addCase(updateGame.rejected, rejected),
})

export default gameSlice
