import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { Input, Button } from 'components'

interface CreateStage {
    value: string
    error?: string
    handleSubmit: () => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
    padding-top: 150px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CreateStage = forwardRef<HTMLInputElement, CreateStage>(
    (props, ref: React.Ref<HTMLInputElement>) => {
        const { value, error, handleSubmit, onChange } = props

        return (
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <Input
                        ref={ref}
                        label="Type your name:"
                        name="userName"
                        value={value}
                        onChange={onChange}
                        error={error}
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            </Wrapper>
        )
    }
)

export default CreateStage
