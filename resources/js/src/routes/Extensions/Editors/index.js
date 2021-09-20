import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';

const Editors = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/ck`} />
        <Route path={`${requestedUrl}/ck`} component={lazy(() => import('./CkEditor'))} />
        <Route path={`${requestedUrl}/wysiwyg`} component={lazy(() => import('./WysiwygEditor'))} />
        <Route component={lazy(() => import('../../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Editors;
