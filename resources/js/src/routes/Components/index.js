import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MuiComponents from './MuiComponents';
import CorematComponents from './CorematComponents';

const Components = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Switch>
      <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/basic`} />
      <Route path={`${requestedUrl}/mui`} component={MuiComponents} />
      <Route path={`${requestedUrl}/coremat`} component={CorematComponents} />
    </Switch>
  );
};

export default Components;
