import { createSlice } from '@reduxjs/toolkit'

const initialState: Game = {
    id: '',
    userName: '',
    score: 0,
    finished: false,
    revealedFields: [],
}

const gameSlice = createSlice<Game, {}>({
    name: 'game',
    initialState,
    reducers: {},
})

export default gameSlice
