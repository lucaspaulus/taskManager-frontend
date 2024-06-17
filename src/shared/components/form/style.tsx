import styled from "styled-components"

export const Container = styled.form`
    width: 100%;
    max-width: 500px;
    padding: 40px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.borderColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    position: relative;
    background-color: ${({ theme }) => theme.paper};

    button {
        margin-top: 40px;
    }

    h1,
    h3 {
        align-self: baseline;
    }
    p {
        color: ${({ theme }) => theme.defaultTextColor};
        font-size: 0.9rem;
    }

    .create-account {
        color: ${({ theme }) => theme.linksColor};
        text-decoration: underline;
        margin-left: 10px;
    }

    .logo-form {
        margin-bottom: 25px;
        margin-right: 0;
    }

    .mode-theme-icon {
        width: auto;
        height: auto;
        position: absolute;
        top: 40px;
        right: 40px;
    }
`
