import axios, { AxiosPromise, Method } from 'axios'

interface UpdateGameParams {
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
        baseURL: process.env.REACT_APP_API_URL || 'localhost:4000',
    })

export const getGame = (gameId: string): AxiosPromise =>
    genericAction<Game>({ method: 'get', url: `/game/${gameId}` })

export const createGame = (userName: string): AxiosPromise =>
    genericAction<Game>({ method: 'post', url: '/game', data: { userName } })

export const updateGame = (data: UpdateGameParams): AxiosPromise =>
    genericAction<UpdateResponse>({ method: 'patch', url: '/game', data })
