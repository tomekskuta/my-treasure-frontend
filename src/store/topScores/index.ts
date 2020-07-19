import { createSlice } from '@reduxjs/toolkit'

const topScoresSlice = createSlice<TopScores, {}>({
    name: 'topScores',
    initialState: [],
    reducers: {},
})

export default topScoresSlice
