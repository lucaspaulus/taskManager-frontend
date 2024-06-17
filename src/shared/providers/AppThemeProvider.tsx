import React, { useCallback, useMemo, useState, ReactNode, useEffect } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { ThemeType } from "../globalAppTypes/ThemeType"
import { DarkTheme, LightTheme } from "../themes"
import { ThemeProvider } from "styled-components"

export default interface AppThemeProviderType {
    children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderType> = ({ children }) => {
    const [themeName, setThemeName] = useState<ThemeType>("light")

    useEffect(() => {
        const themeSaved = localStorage.getItem("theme")
        if (themeSaved) {
            setThemeName(JSON.parse(themeSaved))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(themeName))
    }, [themeName])

    const toggleTheme = useCallback(() => {
        setThemeName((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
    }, [])

    const theme = useMemo(() => (themeName === "light" ? LightTheme : DarkTheme), [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}
