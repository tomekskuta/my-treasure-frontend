import { createAsyncThunk } from '@reduxjs/toolkit'
import { getGame } from 'fetchActions'
import { setStage } from 'store/gameStage'
import { gameIdLocalStorage } from 'utils/localStorage'

const getGameAction = createAsyncThunk(
    'game/getGameAction',
    async (_, thunkAPI) => {
        const { dispatch, rejectWithValue } = thunkAPI

        const gameId = gameIdLocalStorage.get()

        const throwError = (error?: string) => {
            dispatch(setStage('create'))
            return rejectWithValue(error)
        }

        if (!gameId) {
            return throwError()
        }

        try {
            const { data } = await getGame(gameId)
            data.id && dispatch(setStage('play'))
            return data
        } catch (error) {
            return throwError()
        }
    }
)

export default getGameAction
