import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Dashboards = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/to-do`} />
        <Route path={`${requestedUrl}/to-do`} component={lazy(() => import('./TaskList'))} />
        <Route path={`${requestedUrl}/mail`} component={lazy(() => import('./MailApp'))} />
        <Route path={`${requestedUrl}/contact`} component={lazy(() => import('./ContactApp'))} />
        <Route path={`${requestedUrl}/chat`} component={lazy(() => import('./Chat'))} />
        <Route path={`${requestedUrl}/kanban-board`} component={lazy(() => import('./KanbanBoard'))} />
        <Route path={`${requestedUrl}/social-apps/profile`} component={lazy(() => import('./Profile'))} />
        <Route path={`${requestedUrl}/social-apps/wall`} component={lazy(() => import('./Wall'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
