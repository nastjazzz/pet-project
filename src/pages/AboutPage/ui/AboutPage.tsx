import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('pages/about');

  return <h1>{t('title')}</h1>;
};

export default AboutPage;
