type GameStages = 'init' | 'create' | 'play' | 'finish'

type Status = 'T' | 3 | 2 | 1 | null
type Coordinate = 0 | 1 | 2 | 3 | 4
type FieldCoordinates = [Coordinate, Coordinate]

interface RevealedField {
    coordinates: FieldCoordinates
    status: Status
}

interface Game {
    id: string
    userName: string
    score: number
    finished: boolean
    revealedFields: RevealedField[]
}

interface TopScore {
    id: string
    userName: string
    score: number
}

type TopScores = TopScore[]

type MatrixStatus = 'T' | 3 | 2 | 1 | 'C' | 'E'
type MatrixRow = MatrixStatus[]
type Matrix = MatrixRow[]
