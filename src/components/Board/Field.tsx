import React, { useMemo } from 'react'
import styled from 'styled-components'
import isEqual from 'lodash.isequal'

import Treasure from 'components/Treasure'
import { statusStyles, checkedStyles } from './fieldStatusesStyles'

interface Field {
    finishStage?: boolean
    checkedFields: FieldCoordinates[]
    status: MatrixStatus
    coordinates: FieldCoordinates
    onClick: (coordinates: FieldCoordinates) => void
}

interface FieldWrapper {
    disabled: boolean
    checked: boolean
    status: MatrixStatus
}

const FieldWrapper = styled.div<FieldWrapper>`
    width: 20%;
    flex-shrink: 0;
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    cursor: pointer;
    pointer-events: ${({ disabled, checked }) =>
        disabled && !checked ? 'none' : 'all'};

    ${({ status }) => statusStyles[status]}
    ${({ checked }) => checked && checkedStyles}
`

const StyledField = styled.div`
    width: 100%;
    padding-bottom: 100%;
    position: relative;
`

const FieldContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Field: React.FC<Field> = (props) => {
    const { finishStage, checkedFields, status, coordinates, onClick } = props

    const checked = useMemo(
        () => checkedFields.some((field) => isEqual(field, coordinates)),
        [checkedFields, coordinates]
    )

    const fieldContent =
        (typeof status === 'number' && status) ||
        (status === 'T' && <Treasure width={[15, 'px']} />)

    return (
        <FieldWrapper
            disabled={
                finishStage || checkedFields.length === 3 || status !== 'C'
            }
            status={status}
            checked={checked}
            onClick={() => onClick(coordinates)}
        >
            <StyledField>
                <FieldContent>{fieldContent}</FieldContent>
            </StyledField>
        </FieldWrapper>
    )
}

export default Field
