import { createContext } from "react"
import { ThemeType } from "../globalAppTypes/ThemeType"

export default interface ThemeContextType {
    themeName: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType)
