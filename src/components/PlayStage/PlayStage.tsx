import React from 'react'
import styled from 'styled-components'

import { PlayHeader, Board, Button } from 'components'

interface PlayStage {
    loading: boolean
    game: Game
    checkedFields: FieldCoordinates[]
    onClickField: (coordinates: FieldCoordinates) => void
    onClickCheckButton: () => void
}

const CheckButton = styled((props) => <Button {...props} />)`
    margin: 50px auto 0;
`

const PlayStage: React.FC<PlayStage> = (props) => {
    const {
        loading,
        game,
        checkedFields,
        onClickField,
        onClickCheckButton,
    } = props
    const { userName, score, revealedFields } = game

    return (
        <div>
            <PlayHeader userName={userName} score={score} />
            <Board
                checkedFields={checkedFields}
                revealedFields={revealedFields}
                onClickField={onClickField}
            />
            <CheckButton
                loading={loading}
                disabled={!checkedFields.length}
                onClick={onClickCheckButton}
            >
                Check
            </CheckButton>
        </div>
    )
}

export default PlayStage
