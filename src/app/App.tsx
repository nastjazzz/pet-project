// TODO update react up to 18
import { type FC, Suspense, useState } from 'react';
import { AppRouter } from 'app/providers/router/';
import { useTheme } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/';

const App: FC = () => {
  const [open, setOpened] = useState(false);

  const toggleOpen = () => {
    setOpened((prev) => { return !prev; });
  };
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
