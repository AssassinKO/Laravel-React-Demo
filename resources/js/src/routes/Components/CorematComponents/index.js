import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';

const CorematComponents = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/advanced-card`} />
        <Route path={`${requestedUrl}/advanced-card`} component={lazy(() => import('./AdvancedCardDemo'))} />
        <Route path={`${requestedUrl}/basic-card`} component={lazy(() => import('./BasicCardDemo'))} />
        <Route path={`${requestedUrl}/expendable-card`} component={lazy(() => import('./ExpendableCardDemo'))} />
        <Route path={`${requestedUrl}/back-drop`} component={lazy(() => import('./BackDropDemo'))} />
        <Route path={`${requestedUrl}/reveal-card`} component={lazy(() => import('./RevealCardDemo'))} />
        <Route path={`${requestedUrl}/buttons`} component={lazy(() => import('./ButtonsDemo'))} />
        <Route path={`${requestedUrl}/search`} component={lazy(() => import('./SearchDemo'))} />
        <Route path={`${requestedUrl}/timeline`} component={lazy(() => import('./TimelineDemo'))} />
        <Route path={`${requestedUrl}/avatar`} component={lazy(() => import('./AvatarDemo'))} />
        <Route path={`${requestedUrl}/avatar-group`} component={lazy(() => import('./AvatarGroupDemo'))} />
        <Route path={`${requestedUrl}/media-object`} component={lazy(() => import('./MediaObjectDemo'))} />
        <Route path={`${requestedUrl}/drawer`} component={lazy(() => import('./DrawerDemo'))} />
        <Route path={`${requestedUrl}/object-summary`} component={lazy(() => import('./ObjectSummaryDemo'))} />
        <Route path={`${requestedUrl}/carousel`} component={lazy(() => import('./CarouselDemo'))} />
        <Route path={`${requestedUrl}/list`} component={lazy(() => import('./ListDemo'))} />
        <Route path={`${requestedUrl}/grid-view`} component={lazy(() => import('./GridViewDemo'))} />
        <Route path={`${requestedUrl}/group-list`} component={lazy(() => import('./GroupListDemo'))} />
        <Route path={`${requestedUrl}/notifications`} component={lazy(() => import('./NotificationsDemo'))} />
        <Route path={`${requestedUrl}/progressbar`} component={lazy(() => import('./ProgressBarDemo'))} />
        <Route component={lazy(() => import('../../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default CorematComponents;
