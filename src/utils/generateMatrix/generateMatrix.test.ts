import generateMatrix from './index'

describe('utils/generateMatrix', () => {
    const fields = [
        { coordinates: [0, 3], status: null },
        { coordinates: [1, 4], status: 1 },
        { coordinates: [2, 0], status: 3 },
        { coordinates: [3, 1], status: 'T' },
        { coordinates: [3, 2], status: 3 },
        { coordinates: [3, 3], status: 2 },
    ]

    const matrix = [
        ['C', 'C', 'C', 'E', 'C'],
        ['C', 'C', 'C', 'C', 1],
        [3, 'C', 'C', 'C', 'C'],
        ['C', 'T', 3, 2, 'C'],
        ['C', 'C', 'C', 'C', 'C'],
    ]

    it('matrix generates corectly', () => {
        expect(generateMatrix(fields)).toStrictEqual(matrix)
    })
})
