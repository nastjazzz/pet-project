import { useState } from 'react';
import { classNames } from 'shared';

import { useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const [isActive, setIsActive] = useState(false);
    const { toggleTheme } = useTheme();

    const toggleSwitcher = () => {
        toggleTheme();
        setIsActive((prev) => !prev);
    };

    return (
        <div className={classNames(cls.sliderWrapper, {}, [])}>
            {/* <input type="checkbox" className={classNames(cls.input)} name="themeSlider" /> */}
            <span
                className={classNames(cls.slider, { [cls.isActive]: isActive }, [])}
                onClick={toggleSwitcher}
                role="button"
            />
        </div>
    );
};
