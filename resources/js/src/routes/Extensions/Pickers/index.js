import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';

const Pickers = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/date`} />
        <Route path={`${requestedUrl}/date`} component={lazy(() => import('./Date'))} />
        <Route path={`${requestedUrl}/time`} component={lazy(() => import('./Time'))} />
        <Route path={`${requestedUrl}/date-time`} component={lazy(() => import('./DateTime'))} />
        <Route path={`${requestedUrl}/color`} component={lazy(() => import('./ReactColor'))} />
        <Route component={lazy(() => import('../../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Pickers;
