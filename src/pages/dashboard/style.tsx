import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    display: flex;
    padding: 20px 0;
    height: fit-content;
    flex-direction: column;
    svg {
        fill: ${({ theme }) => theme.defaultTextColor};
    }
    svg:hover {
        transform: scale3d(1.3, 1.3, 1.3);
        transition: 0.5s;
        cursor: pointer;
    }
`

export const CardsSection = styled.section`
    width: 100%;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.cardPaper};
    height: 200px;
    padding: 20px;
    border-radius: 0.8rem;
    font-size: 1rem;
    overflow: hidden;
    p {
        font-size: 0.9rem;
        word-break: break-all;
        line-height: 1.65;
    }
    h1 {
        font-size: 1rem;
        word-wrap: break-word;
        max-width: 200px;
        overflow-x: auto;
        text-wrap: nowrap;
    }
    border: 1px solid ${({ theme }) => theme.cardBorderColor};
    hr {
        margin: 8px 0;
    }
`
export const CardSectionEmpty = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;

    h2 {
        margin-bottom: 0;
        font-weight: 600;
    }

    svg {
        font-size: 3rem;
        margin-top: 15px;
    }
`
export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .iconsGroup {
        display: flex;
        gap: 8px;
    }

    svg {
        cursor: pointer;
        width: 1rem;
        height: 1rem;
    }

    .icon-delete {
        width: 1.1rem;
        height: 1.1rem;
    }
`

export const CardBody = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0px 15px 0 0;
`
export const Tools = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.defaultTextColor};
    font-weight: 800;

    padding: 20px;
    background: ${({ theme }) => theme.paper};
    border-radius: 50px;
    align-items: center;
    margin: 20px 0;

    h1 {
        font-weight: 400;
        letter-spacing: 1.5px;
    }

    svg {
        font-size: 1.4rem;
    }
`
