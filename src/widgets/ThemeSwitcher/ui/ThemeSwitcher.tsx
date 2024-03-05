import { classNames } from "shared";

import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <>
            <label className={classNames(cls.sliderWrapper, {}, [])}>
                <input type="checkbox" className={classNames(cls.input)} />
                <span className={classNames(cls.slider, {}, ["round"])} onClick={toggleTheme}></span>
            </label>
        </>
    );
};
