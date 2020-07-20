import axios, { AxiosPromise, Method } from 'axios'

export interface UpdateGameParams {
    id: string
    revealedFields: Coordinates[]
}

interface UpdateResponse extends Game {
    topScores?: TopScores
}

interface FetchActionParams {
    method: Method
    url: string
    data?: object
}

const genericAction = <R extends object>(
    params: FetchActionParams
): AxiosPromise<R> =>
    axios({
        ...params,
        headers: { Accept: 'application/json' },
        baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
    })

export const getGame = (gameId?: string | null): AxiosPromise<Game> =>
    genericAction({ method: 'get', url: `/game/${gameId}` })

export const createGame = (userName: string): AxiosPromise<Game> =>
    genericAction({ method: 'post', url: '/game', data: { userName } })

export const updateGame = (
    data: UpdateGameParams
): AxiosPromise<UpdateResponse> =>
    genericAction({ method: 'patch', url: '/game', data })
