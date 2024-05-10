import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from "./shared/themes/GlobalStyle.tsx"
import { ThemeProvider } from 'styled-components'
import { theme } from './shared/themes/defaultTheme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
