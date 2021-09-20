import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';

const Calendar = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/basic`} />
        <Route path={`${requestedUrl}/basic`} component={lazy(() => import('./Basic'))} />
        <Route path={`${requestedUrl}/cultures`} component={lazy(() => import('./Cultures'))} />
        <Route path={`${requestedUrl}/popup`} component={lazy(() => import('./Popup'))} />
        <Route path={`${requestedUrl}/rendering`} component={lazy(() => import('./Rendering'))} />
        <Route path={`${requestedUrl}/selectable`} component={lazy(() => import('./Selectable'))} />
        <Route path={`${requestedUrl}/timeslots`} component={lazy(() => import('./Timeslots'))} />
      </Switch>
    </Suspense>
  );
};

export default Calendar;
