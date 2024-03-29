import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                Object.values(routeConfig)
                    .map((routeData) => (
                        <Route
                            key={routeData.path}
                            path={routeData.path}
                            element={<div className="page-wrapper">{routeData.element}</div>}
                        />
                    ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
