import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

interface Input {
    label: string
    name: string
    value: string
    error?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    position: relative;
`

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 20px;
    font-weight: 600;
`

const StyledInput = styled.input`
    width: 100%;
    border-radius: 0;
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.blue};
    transition: border-color 0.3s;
    margin-bottom: 45px;

    &:focus {
        border: 3px solid ${({ theme }) => theme.colors.darkBlue};
        padding: 9px;
    }
`

const StyledError = styled(motion.p)`
    color: ${({ theme }) => theme.colors.red};
    position: absolute;
    bottom: 0;
`

const Input = forwardRef<HTMLInputElement, Input>(
    (props, ref?: React.Ref<HTMLInputElement>) => {
        const { label, name, value, error, onChange } = props

        return (
            <Wrapper>
                <Label>{label}</Label>
                <StyledInput
                    ref={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <AnimatePresence>
                    {error && (
                        <StyledError
                            key="error-label"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {error}
                        </StyledError>
                    )}
                </AnimatePresence>
            </Wrapper>
        )
    }
)

export default Input
