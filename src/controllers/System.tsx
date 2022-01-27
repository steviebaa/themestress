import React from 'react';
import {useLocation} from 'react-router';
import {Outlet} from 'react-router-dom';
import {getPageFromRoute} from '@core/routeMap';

export const System = () => {
  const location = useLocation();
  const info = getPageFromRoute(location.pathname);

  return (
    <>
      <h1>{info.name}</h1>
      <Outlet />
    </>
  );
};
