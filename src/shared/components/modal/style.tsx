import styled from "styled-components"
interface ContainerStyledProps {
    showModal: boolean;
}
export const Container = styled.div<ContainerStyledProps>`
    visibility: ${({ showModal }) => (showModal ? "visible" : "hidden")};
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: baseline;
    background-color: #31313190;
    z-index: 5;
    form {
        min-height: 400px;
    }
`
export const BtnGroup = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
`
