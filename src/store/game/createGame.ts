import { createAsyncThunk } from '@reduxjs/toolkit'
import { createGame } from 'fetchActions'
import { setStage } from 'store/gameStage'
import { gameIdLocalStorage, userNameLocalStorage } from 'utils/localStorage'

const createGameAction = createAsyncThunk(
    'game/createGameAction',
    async (userName: string, thunkAPI) => {
        const { dispatch } = thunkAPI

        const { data } = await createGame(userName)

        gameIdLocalStorage.set(data.id)
        userNameLocalStorage.set(data.userName)
        dispatch(setStage('play'))

        return data
    }
)

export default createGameAction
