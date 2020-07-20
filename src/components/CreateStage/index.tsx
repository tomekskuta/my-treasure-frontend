import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import CreateStage from './CreateStage'
import { userNameLocalStorage } from 'utils/localStorage'

interface Form {
    userName: string
}

const validationSchema = yup.object({
    userName: yup.string().required('Type your name.'),
})

const initialValues = { userName: '' }

const CreateStageContainer = () => {
    const onSubmit = () => {
        console.log('submitted')
    }

    const formik = useFormik<Form>({
        initialValues,
        validationSchema,
        onSubmit,
    })
    const { values, errors, setFieldValue, handleSubmit, handleChange } = formik

    useEffect(() => {
        const rememberedName = userNameLocalStorage.get()
        rememberedName && setFieldValue(rememberedName, 'userName')
    }, [])

    return (
        <CreateStage
            value={values.userName}
            error={errors.userName}
            handleSubmit={handleSubmit}
            onChange={handleChange}
        />
    )
}

export default CreateStageContainer
