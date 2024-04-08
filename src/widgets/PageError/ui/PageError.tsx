import { Button, classNames } from 'shared';

import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('PageError')}</p>
            <Button onClick={reloadPage} className={cls.ReloadBtn}>{t('UpdatePage')}</Button>
        </div>
    );
};
