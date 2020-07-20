const emptyRow: MatrixRow = ['C', 'C', 'C', 'C', 'C']
const emptyMatrix: Matrix = [emptyRow, emptyRow, emptyRow, emptyRow, emptyRow]

const getFieldStatus = (status: Status): MatrixStatus =>
    status === null ? 'E' : status

const fillRow = (fields: RevealedField[], rowIndex: number) => (
    _: any,
    index: number
): MatrixStatus => {
    const currentField = fields.find(
        ({ coordinates }: RevealedField) =>
            coordinates[0] === rowIndex && coordinates[1] === index
    )

    return currentField ? getFieldStatus(currentField.status) : 'C'
}

const generateMatrix = (fields: RevealedField[]): Matrix => {
    const filledMatrix = emptyMatrix.map(
        (row, rowIndex): MatrixRow => row.map(fillRow(fields, rowIndex))
    )
    return filledMatrix
}

export default generateMatrix
