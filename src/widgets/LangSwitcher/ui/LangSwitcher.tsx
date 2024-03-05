import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton, classNames } from 'shared';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <div>
            <Button
                className={classNames(cls.LandSwitcher, {}, [])}
                theme={ThemeButton.CLEAR}
                onClick={changeLanguage}
            >
                {t('language')}
            </Button>
        </div>
    );
};
