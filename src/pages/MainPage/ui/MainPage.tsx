import { BugButton } from 'app/providers/ErrorBoundary';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('pages/main');

  return (
    <div>
      <h1>{t('title')}</h1>
      <BugButton />
    </div>
  );
};

export default MainPage;
