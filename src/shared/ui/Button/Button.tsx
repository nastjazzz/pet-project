import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    BORDER = 'border'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    handleClick?: () => void
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        handleClick,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[theme]])}
            onClick={handleClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
