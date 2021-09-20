import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Maps = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/simple`} />
        <Route path={`${requestedUrl}/simple`} component={lazy(() => import('./SimpleMap'))} />
        <Route path={`${requestedUrl}/styled`} component={lazy(() => import('./StyledMap'))} />
        <Route path={`${requestedUrl}/geo-location`} component={lazy(() => import('./GeoLocation'))} />
        <Route path={`${requestedUrl}/directions`} component={lazy(() => import('./MapDirections'))} />
        <Route path={`${requestedUrl}/overlay`} component={lazy(() => import('./MapOverlay'))} />
        <Route path={`${requestedUrl}/kml`} component={lazy(() => import('./MapKmLayer'))} />
        <Route path={`${requestedUrl}/popup-info`} component={lazy(() => import('./MapPopupInfo'))} />
        <Route path={`${requestedUrl}/street-view`} component={lazy(() => import('./StreetViewPanorama'))} />
        <Route path={`${requestedUrl}/drawing`} component={lazy(() => import('./DrawingView'))} />
        <Route path={`${requestedUrl}/clustering`} component={lazy(() => import('./MarkerClusterer'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Maps;
