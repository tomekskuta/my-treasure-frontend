import { configureStore } from '@reduxjs/toolkit'
import gameSlide from './game'

const store = configureStore({
    reducer: {
        game: gameSlide.reducer,
    },
})

export default store
