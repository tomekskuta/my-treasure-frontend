import { createSlice, createAction } from '@reduxjs/toolkit'

export const setTopScores = createAction<TopScores | undefined>('setTopScores')

const topScoresSlice = createSlice<TopScores, {}>({
    name: 'topScores',
    initialState: [],
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(
            setTopScores,
            (state, action) => action.payload || state
        ),
})

export default topScoresSlice
