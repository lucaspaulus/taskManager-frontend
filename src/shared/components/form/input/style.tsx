import styled from "styled-components"

interface InputProps {
    isError: boolean;
}
export const Input = styled.input<InputProps>`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid ${({ theme, isError }) => (isError ? "red" : theme.borderColor)};
    margin-bottom: 15px;
    padding-left: 10px;
    background-color: ${({ theme }) => theme.paper};
    color: ${({ theme }) => theme.defaultTextColor};

    &::placeholder {
        color: ${({ theme }) => theme.inputPlaceholderColor};
    }

    &:focus {
        outline: 1px solid ${({ theme, isError }) => (isError ? "red" : theme.borderColor)};
    }
`

export const InputPasswordWrapper = styled.div`
    width: 100%;
    position: relative;
`
export const IconWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 12px;
    color: ${({ theme }) => theme.defaultTextColor};
`
