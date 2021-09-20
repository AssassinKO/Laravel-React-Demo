import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';

const MuiComponents = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/buttons`} />
        <Route path={`${requestedUrl}/buttons`} component={lazy(() => import('./Buttons'))} />
        <Route path={`${requestedUrl}/button-group`} component={lazy(() => import('./ButtonGroup'))} />
        <Route path={`${requestedUrl}/checkbox`} component={lazy(() => import('./Checkboxes'))} />
        <Route path={`${requestedUrl}/fab`} component={lazy(() => import('./FloatingActionButton'))} />
        <Route path={`${requestedUrl}/date-time`} component={lazy(() => import('./Pickers'))} />
        <Route path={`${requestedUrl}/radio`} component={lazy(() => import('./RadioButton'))} />
        <Route path={`${requestedUrl}/select`} component={lazy(() => import('./Selects'))} />
        <Route path={`${requestedUrl}/slider`} component={lazy(() => import('./Slider'))} />
        <Route path={`${requestedUrl}/switch`} component={lazy(() => import('./Switches'))} />
        <Route path={`${requestedUrl}/text-field`} component={lazy(() => import('./TextFields'))} />
        <Route path={`${requestedUrl}/transfer-list`} component={lazy(() => import('./TransferLists'))} />
        <Route path={`${requestedUrl}/bottom-navigation`} component={lazy(() => import('./BottomNavigations'))} />
        <Route path={`${requestedUrl}/breadcrumb`} component={lazy(() => import('./Breadcrumbs'))} />
        <Route path={`${requestedUrl}/drawer`} component={lazy(() => import('./Drawer'))} />
        <Route path={`${requestedUrl}/links`} component={lazy(() => import('./Links'))} />
        <Route path={`${requestedUrl}/menu`} component={lazy(() => import('./Menus'))} />
        <Route path={`${requestedUrl}/stepper`} component={lazy(() => import('./Stepper'))} />
        <Route path={`${requestedUrl}/tabs`} component={lazy(() => import('./Tabs'))} />
        <Route path={`${requestedUrl}/appbar`} component={lazy(() => import('./AppBar'))} />
        <Route path={`${requestedUrl}/paper`} component={lazy(() => import('./Paper'))} />
        <Route path={`${requestedUrl}/card`} component={lazy(() => import('./Card'))} />
        <Route path={`${requestedUrl}/accordion`} component={lazy(() => import('./Accordion'))} />
        <Route path={`${requestedUrl}/progress`} component={lazy(() => import('./Progress'))} />
        <Route path={`${requestedUrl}/dialog`} component={lazy(() => import('./Dialog'))} />
        <Route path={`${requestedUrl}/snackbar`} component={lazy(() => import('./Snackbar'))} />
        <Route path={`${requestedUrl}/backdrop`} component={lazy(() => import('./Backdrop'))} />
        <Route path={`${requestedUrl}/avatar`} component={lazy(() => import('./Avatar'))} />
        <Route path={`${requestedUrl}/badge`} component={lazy(() => import('./Badge'))} />
        <Route path={`${requestedUrl}/chip`} component={lazy(() => import('./Chip'))} />
        <Route path={`${requestedUrl}/divider`} component={lazy(() => import('./Divider'))} />
        <Route path={`${requestedUrl}/list`} component={lazy(() => import('./Lists'))} />
        <Route path={`${requestedUrl}/table`} component={lazy(() => import('./Table'))} />
        <Route path={`${requestedUrl}/tooltip`} component={lazy(() => import('./Tooltip'))} />
        <Route path={`${requestedUrl}/typography`} component={lazy(() => import('./Typography'))} />
        <Route path={`${requestedUrl}/click-away-listener`} component={lazy(() => import('./ClickAwayListener'))} />
        <Route path={`${requestedUrl}/modal`} component={lazy(() => import('./Modal'))} />
        <Route path={`${requestedUrl}/no-ssr`} component={lazy(() => import('./NoSsr'))} />
        <Route path={`${requestedUrl}/popover`} component={lazy(() => import('./Popover'))} />
        <Route path={`${requestedUrl}/popper`} component={lazy(() => import('./Popper'))} />
        <Route path={`${requestedUrl}/portal`} component={lazy(() => import('./Portal'))} />
        <Route path={`${requestedUrl}/textarea-autosize`} component={lazy(() => import('./TextareaAutosize'))} />
        <Route path={`${requestedUrl}/transitions`} component={lazy(() => import('./Transitions'))} />
        <Route path={`${requestedUrl}/alert`} component={lazy(() => import('./Alert'))} />
        <Route path={`${requestedUrl}/auto-complete`} component={lazy(() => import('./AutoComplete'))} />
        <Route path={`${requestedUrl}/pagination`} component={lazy(() => import('./Pagination'))} />
        <Route path={`${requestedUrl}/rating`} component={lazy(() => import('./Rating'))} />
        <Route path={`${requestedUrl}/skeleton`} component={lazy(() => import('./Skeleton'))} />
        <Route path={`${requestedUrl}/speed-dial`} component={lazy(() => import('./SpeedDial'))} />
        <Route path={`${requestedUrl}/timeline`} component={lazy(() => import('./Timeline'))} />
        <Route path={`${requestedUrl}/toggle-button`} component={lazy(() => import('./ToggleButtons'))} />
        <Route path={`${requestedUrl}/tree-view`} component={lazy(() => import('./TreeView'))} />
        <Route component={lazy(() => import('../../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default MuiComponents;
