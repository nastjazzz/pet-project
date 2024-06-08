import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, classNames } from 'shared';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <div>
      <Button
        className={classNames('', {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={changeLanguage}
      >
        {short ? t('langShort') : t('lang')}
      </Button>
    </div>
  );
};
