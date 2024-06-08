import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme, classNames } from 'shared';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)} />
    </div>
  );
};
