import React, { useMemo } from 'react'
import styled from 'styled-components'

import Field from './Field'

import generateMatrix from 'utils/generateMatrix'

interface Board {
    finishStage?: boolean
    checkedFields: FieldCoordinates[]
    revealedFields: RevealedField[]
    onClickField: (coordinates: FieldCoordinates) => void
}

const StyledBoard = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    max-width: 400px;
    margin: 0 auto;
    box-sizing: content-box;
`

const BoardRow = styled.div`
    width: 100%;
    display: flex;
`

const Board: React.FC<Board> = (props) => {
    const { finishStage, checkedFields, revealedFields, onClickField } = props

    const matrix = useMemo(() => generateMatrix(revealedFields), [
        revealedFields,
    ])

    return (
        <StyledBoard>
            {matrix.map((row, rowIndex: number) => (
                <BoardRow key={rowIndex}>
                    {row.map((fieldStatus, columnIndex) => (
                        <Field
                            key={columnIndex}
                            finishStage={finishStage}
                            checkedFields={checkedFields}
                            status={fieldStatus}
                            coordinates={[rowIndex, columnIndex]}
                            onClick={onClickField}
                        />
                    ))}
                </BoardRow>
            ))}
        </StyledBoard>
    )
}

export default Board
