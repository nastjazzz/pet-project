import { createContext } from "react";

export enum Themes {
    light = "light",
    dark = "dark",
}

export interface ThemeContextProps {
    theme?: Themes;
    setTheme?: (newTheme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
