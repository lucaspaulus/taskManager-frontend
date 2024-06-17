import styled, { keyframes } from "styled-components"
const AnimateIconThemMode = keyframes`
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}

`
export const Container = styled.div`
    height: 1.4rem;
    svg {
        cursor: pointer;
        font-size: 1.4rem;
        fill: ${({ theme }) => theme.defaultTextColor};
        &:hover {
            animation: ${AnimateIconThemMode} 1s linear;
        }
    }
`
