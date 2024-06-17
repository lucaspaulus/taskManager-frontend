import { createGlobalStyle } from "styled-components"
import "react-toastify/dist/ReactToastify.css"
export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html {
        scroll-behavior: smooth;
        
    }

    body {
        background-color: ${({ theme }) => theme.background};
        max-width: 1440px;
        margin:  0 auto;
    }

    a {
        text-decoration: none;
    }

    h1, p{
        color: ${({ theme }) => theme.defaultTextColor};
    }
    
    li {
        list-style: none;
    }

    button {
        border: none;
        box-sizing: border-box;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #d4d4d4;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #616161;
        
        border: 3px solid transparent;
        background-clip: content-box
    }

`
