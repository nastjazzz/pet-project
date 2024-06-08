import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, ButtonTheme, Modal, classNames,
} from 'shared';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => { return !prev; });
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classNames(cls.links)}
        onClick={onToggleModal}
      >
        {t('Login')}
      </Button>
      <Modal onClose={onToggleModal} isOpen={isAuthModal}>
        {/* eslint-disable i18next/no-literal-string */}
        Unde adipisci voluptate eum dolores autem praesentium culpa,
        incidunt molestiae temporibus, veniam beatae ab id fugiat quasi
        nobis tempore quis neque ea.
      </Modal>
    </div>
  );
};
