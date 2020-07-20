import styled from 'styled-components'

const Button = styled.button`
    background-color: transparent;
    border-radius: 0;
    border: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.darkBlue};
    padding: 15px 30px;
    font-size: 20px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;

    &:focus {
        border: 3px solid ${({ theme }) => theme.colors.darkBlue};
        padding: 14px 29px;
    }

    @media (hover: hover) {
        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.yellow};
        }
    }
`

export default Button
