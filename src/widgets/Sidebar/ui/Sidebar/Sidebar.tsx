import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import {
    AppLink,
    AppLinkTheme,
    Button,
    ButtonTheme,
    classNames,
} from 'shared';
import ArrowIcon from 'shared/assets/img/arrow.svg';
import HomeIcon from 'shared/assets/img/home.svg';
import AboutIcon from 'shared/assets/img/about.svg';

import { Themes, useTheme } from 'app/providers/ThemeProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = (): void => {
        setCollapsed((prev) => { return !prev; });
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
            <Button
                className={cls.btn}
                onClick={onToggle}
                type="button"
                theme={ButtonTheme.CLEAR}
                data-testid="sidebar-toggle"
            >
                <ArrowIcon fill={theme === Themes.light ? '#ffffff' : '#000000'} className={cls.arrow} />
            </Button>

            <div className={cls.menuItems}>
                <div className={cls.menuItem}>
                    <AppLink to={RoutePath.main} theme={AppLinkTheme.PRIMARY_INVERTED} className={cls.link}>
                        <HomeIcon className={cls.icon} />
                        <span className={cls.linkText}>{t('mainPage')}</span>
                    </AppLink>
                </div>
                <div className={cls.menuItem}>
                    <AppLink to={RoutePath.about} theme={AppLinkTheme.PRIMARY_INVERTED} className={cls.link}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.linkText}>{t('aboutPage')}</span>
                    </AppLink>
                </div>

            </div>

            <div className={cls.switchers} data-testid="switchers-wrapper">
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
