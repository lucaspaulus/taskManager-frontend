import styled from "styled-components"

interface ContainerStyledProps {
    maxWidth?: string;
    cursorPointer?: boolean;
}

export const Container = styled.svg<ContainerStyledProps>`
    width: 100%;
    height: auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}rem` : "8rem")};
    margin-right: 1rem;
    cursor: ${({ cursorPointer }) => (cursorPointer ? "pointer" : "default")};
`

export const Path = styled.path`
    fill: ${({ theme }) => theme.defaultTextColor};
    stroke: ${({ theme }) => theme.paper};

    &:nth-child(3) {
        stroke: none;
    }
`
