import { classNames } from 'shared';

import { useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <label className={classNames(cls.sliderWrapper, {}, [])} htmlFor="themeSlider">
            <input type="checkbox" className={classNames(cls.input)} name="themeSlider" />
            <span
                className={classNames(cls.slider, {}, ['round'])}
                onClick={toggleTheme}
                role="button"
            />
        </label>
    );
};
