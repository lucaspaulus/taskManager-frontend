import styled from "styled-components"

export interface ContainerStyledProps {
    maxWidth?: string;
    height?: string;
}

export const PrimaryButton = styled.button<ContainerStyledProps>`
    width: 100%;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}rem` : "15rem")};
    min-width: 4rem;
    height: ${({ height }) => (height ? `${height}rem` : "3rem")};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.button.primary.background};
    color: ${({ theme }) => theme.button.primary.color};
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: ${({ theme }) => theme.button.primary.backgroundHover};
        color: ${({ theme }) => theme.button.primary.colorHover};
    }
`

export const SecondaryButton = styled(PrimaryButton)`
    background-color: ${({ theme }) => theme.button.secondary.background};
    color: ${({ theme }) => theme.button.secondary.color};
    &:hover {
        background-color: ${({ theme }) => theme.button.secondary.backgroundHover};
        color: ${({ theme }) => theme.button.secondary.colorHover};
    }
`
