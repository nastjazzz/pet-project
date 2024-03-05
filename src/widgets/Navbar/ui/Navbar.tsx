import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme, classNames } from 'shared';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.link}>
                    {t('mainPage')}
                </AppLink>

                <AppLink to="/about" theme={AppLinkTheme.SECONDARY} className={cls.link}>
                    {t('aboutPage')}
                </AppLink>
            </div>
        </div>
    );
};
