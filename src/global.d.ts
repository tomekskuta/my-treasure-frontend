type Coordinate = 0 | 1 | 2 | 3 | 4
type Status = 'T' | 3 | 2 | 1 | null

interface RevealedField {
    coordinates: [Coordinate, Coordinate]
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
