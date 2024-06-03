import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { landlord_routes, main_routes,auth_routes, maintainer_routes } from './routes';

const App = () => {

  return (
    <Router>
      <Routes>

        {/* Auth Routes Starts */}
        {auth_routes.map(route => (
          <Route key={route.id} path={`/${route.path}`} element={route.element} />
        ))}
        {/* Auth Routes End */}

        {/* Landlord Routes Starts */}
        {landlord_routes.map(route => (
          <Route key={route.id} path={`/landlord${route.path}`} element={route.element} />
        ))}
        {/* Landlord Routes End */}


         {/* Maintainer Routes Starts */}
         {maintainer_routes.map(route => (
          <Route key={route.id} path={`/maintainer${route.path}`} element={route.element} />
        ))}
        {/* Maintainer Routes End */}

        

        {/* Main website routes starts  */}
        {main_routes.map(route => (
          <Route key={route.id} path={`/${route.path}`} element={route.element} />
        ))}
        {/* Main website routes End  */}
      
      </Routes>
    </Router>
  );
};

export default App;
