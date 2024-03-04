import { classNames } from "shared";

import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme = ThemeButton.CLEAR, ...otherProps } = props;

    return (
        <button className={classNames(cls.button, {}, [className, theme])} {...otherProps}>
            {children}
        </button>
    );
};
