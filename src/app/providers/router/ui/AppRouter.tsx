import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Routes>
      {
        Object.values(routeConfig)
          .map((routeData) => {
            return (
              <Route
                key={routeData.path}
                path={routeData.path}
                element={(
                  <Suspense fallback={<PageLoader />}>
                    <div className="page-wrapper">{routeData.element}</div>
                  </Suspense>
                )}
              />
            );
          })
      }
    </Routes>
  );
};

export default AppRouter;
