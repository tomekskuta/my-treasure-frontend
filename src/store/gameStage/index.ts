import { createSlice, createAction } from '@reduxjs/toolkit'

export const setStage = createAction<GameStages>('setStage')

const gameStageSlice = createSlice<GameStages, {}>({
    name: 'gameStage',
    initialState: 'init',
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(setStage, (state, action) => action.payload),
})

export default gameStageSlice
