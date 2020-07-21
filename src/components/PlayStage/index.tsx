import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import isEqual from 'lodash.isequal'

import PlayStage from './PlayStage'

import updateGame from 'store/game/updateGame'

const PlayStageContainer: React.FC = () => {
    const [checkedFields, setCheckedFields] = useState<FieldCoordinates[]>([])

    const dispatch = useDispatch()
    const { data: game, loading } = useSelector((state) => state.game)

    useEffect(() => {
        setCheckedFields([])
    }, [game.revealedFields])

    const handleSetCheckedFields = useCallback(
        (coordinates: FieldCoordinates) => {
            const filteredChecked = checkedFields.filter(
                (element) => !isEqual(element, coordinates)
            )
            const newCheked: FieldCoordinates[] =
                filteredChecked.length < checkedFields.length
                    ? filteredChecked
                    : [...checkedFields, coordinates]

            setCheckedFields(newCheked)
        },
        [checkedFields]
    )

    const handleCheckFields = async () => {
        await dispatch(
            updateGame({ id: game.id, revealedFields: checkedFields })
        )
    }

    return (
        <PlayStage
            loading={loading}
            game={game}
            checkedFields={checkedFields}
            onClickField={handleSetCheckedFields}
            onClickCheckButton={handleCheckFields}
        />
    )
}

export default PlayStageContainer
