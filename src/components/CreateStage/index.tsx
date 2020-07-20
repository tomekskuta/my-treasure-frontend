import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'

import CreateStage from './CreateStage'

import createGame from 'store/game/createGame'
import { userNameLocalStorage } from 'utils/localStorage'

interface Form {
    userName: string
}

const validationSchema = yup.object({
    userName: yup.string().required('Type your name.'),
})

const initialValues = { userName: '' }

const CreateStageContainer = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const loading = useSelector((state) => state.game.loading)

    const dispatch = useDispatch()
    const onSubmit = (values: Form) => {
        dispatch(createGame(values.userName))
    }

    const formik = useFormik<Form>({
        initialValues,
        validationSchema,
        onSubmit,
        validateOnMount: false,
    })
    const { values, errors, setFieldValue, handleSubmit, handleChange } = formik

    useEffect(() => {
        const rememberedName = userNameLocalStorage.get()
        rememberedName && setFieldValue('userName', rememberedName)

        inputRef.current?.focus()
    }, [])

    return (
        <CreateStage
            ref={inputRef}
            loading={loading}
            value={values.userName}
            error={errors.userName}
            handleSubmit={handleSubmit}
            onChange={handleChange}
        />
    )
}

export default CreateStageContainer
