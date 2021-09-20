import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Extensions = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/editors`} />
        <Route path={`${requestedUrl}/editors`} component={lazy(() => import('./Editors'))} />
        <Route path={`${requestedUrl}/pickers`} component={lazy(() => import('./Pickers'))} />
        <Route path={`${requestedUrl}/dnd`} component={lazy(() => import('./DragAndDrop'))} />
        <Route path={`${requestedUrl}/sweet-alert`} component={lazy(() => import('./SweetAlerts'))} />
        <Route path={`${requestedUrl}/notification`} component={lazy(() => import('./ReactNotifications'))} />
        <Route path={`${requestedUrl}/dropzone`} component={lazy(() => import('./ReactDropzone'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Extensions;
