import { createGlobalStyle } from "styled-components"; 
export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body{
        background-color: ${(props)=> props.theme.light};
    }

    a{
        text-decoration: none;
       
    }

    li{
        list-style: none;
      
    }

    a, li{
        color: ${(props)=> props.theme.primary};
    }

    button{
        border: none;
        box-sizing: border-box;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #d4d4d4; 
    }
  
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #616161;
    }

`