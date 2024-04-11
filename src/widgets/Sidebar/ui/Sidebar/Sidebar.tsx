import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

import { Button, ThemeButton, classNames } from 'shared';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'sidebar' });
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = (): void => {
        setCollapsed((prev) => { return !prev; });
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
            <Button
                onClick={onToggle}
                type="button"
                theme={ThemeButton.CLEAR}
                data-testid="sidebar-toggle"
            >
                {!collapsed ? t('toggle') : t('toggleCollapsed')}
            </Button>
            <div className={cls.switchers} data-testid="switchers-wrapper">
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
