import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Charts = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/area`} />
        <Route path={`${requestedUrl}/line`} component={lazy(() => import('./Line'))} />
        <Route path={`${requestedUrl}/bar`} component={lazy(() => import('./Bar'))} />
        <Route path={`${requestedUrl}/area`} component={lazy(() => import('./Area'))} />
        <Route path={`${requestedUrl}/composed`} component={lazy(() => import('./Composed'))} />
        <Route path={`${requestedUrl}/pie`} component={lazy(() => import('./Pie'))} />
        <Route path={`${requestedUrl}/scatter`} component={lazy(() => import('./Scatter'))} />
        <Route path={`${requestedUrl}/radial`} component={lazy(() => import('./Radial'))} />
        <Route path={`${requestedUrl}/radar`} component={lazy(() => import('./Radar'))} />
        <Route path={`${requestedUrl}/treemap`} component={lazy(() => import('./Treemap'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Charts;
