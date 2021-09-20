import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';

const CustomTimelines = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/left-align`} />
        <Route path={`${requestedUrl}/left-align`} component={lazy(() => import('./LeftAlign'))} />
        <Route path={`${requestedUrl}/right-align`} component={lazy(() => import('./RightAlign'))} />
        <Route path={`${requestedUrl}/zigzag`} component={lazy(() => import('./Zigzag'))} />
        <Route path={`${requestedUrl}/center-align`} component={lazy(() => import('./CenterAlign'))} />
        <Route path={`${requestedUrl}/center-with-icon`} component={lazy(() => import('./CenterWithIcon'))} />
      </Switch>
    </Suspense>
  );
};

export default CustomTimelines;
