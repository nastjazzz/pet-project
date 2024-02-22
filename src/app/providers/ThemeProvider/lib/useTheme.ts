import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./ThemeContext";

interface UserThemeResult {
    toggleTheme: () => void;
    theme: Themes;
}

// my own hook
export function useTheme(): UserThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
