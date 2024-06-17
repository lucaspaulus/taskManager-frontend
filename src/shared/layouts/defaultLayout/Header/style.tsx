import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    background-color: ${({ theme }) => theme.paper};
    width: 100%;
    height: 80px;
    padding: 0 40px;
    justify-content: space-between;
    align-items: center;
`
export const GroupItems = styled.div`
    display: flex;
    width: 60%;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
`
