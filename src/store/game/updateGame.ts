import { createAsyncThunk } from '@reduxjs/toolkit'
import { updateGame, UpdateGameParams } from 'fetchActions'
import { setStage } from 'store/gameStage'
import { setTopScores } from 'store/topScores'

const updateGameAction = createAsyncThunk(
    'game/updateGameAction',
    async (gamePayload: UpdateGameParams, thunkAPI) => {
        const { dispatch } = thunkAPI

        const { data } = await updateGame(gamePayload)

        if (data.finished) {
            dispatch(setStage('finish'))
            dispatch(setTopScores(data.topScores))
        }

        return data
    }
)

export default updateGameAction
