import { FC } from 'react';
import { Button, classNames } from 'shared';

import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('errorTitle')}</p>
      <Button onClick={reloadPage} className={cls.ReloadBtn}>{t('errorBtn')}</Button>
    </div>
  );
};
