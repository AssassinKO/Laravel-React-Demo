import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleAppBar from './demo/SimpleAppBar';
import PrimarySearchAppBar from './demo/PrimarySearchAppBar';
import MenuAppBar from './demo/MenuAppBar';
import SearchAppBar from './demo/SearchAppBar';
import DenseAppBar from './demo/DenseAppBar';
import ProminentAppBar from './demo/ProminentAppBar';
import BottomAppBar from './demo/BottomAppBar';
import HideAppBar from './demo/HideAppBar';
import ElevateAppBar from './demo/ElevateAppBar';
import BackToTop from './demo/BackToTop';
import IframeWindow from '../../../../@jumbo/components/Common/IframeWindow';

const useStyles = makeStyles(theme => ({
  section: {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(32),
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },
}));

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/appbar', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple App Bar',
    link: 'simple-app-bar',
    component: <SimpleAppBar />,
    filename: './SimpleAppBar.txt',
  },
  {
    label: 'App Bar with a primary search field',
    link: 'app-bar-with-a-primary-search-field',
    component: <PrimarySearchAppBar />,
    filename: './PrimarySearchAppBar.txt',
  },
  {
    label: 'App Bar with menu',
    link: 'app-bar-with-menu',
    component: <MenuAppBar />,
    filename: './MenuAppBar.txt',
  },
  {
    label: 'App Bar with search field',
    link: 'app-bar-with-search-field',
    component: <SearchAppBar />,
    filename: './SearchAppBar.txt',
  },
  {
    label: 'Dense (desktop only)',
    link: 'dense-desktop-only',
    component: <DenseAppBar />,
    filename: './DenseAppBar.txt',
  },
  {
    label: 'Prominent',
    link: 'prominent',
    component: <ProminentAppBar />,
    filename: './ProminentAppBar.txt',
  },
  {
    label: 'Bottom App Bar',
    link: 'bottom-app-bar',
    component: <BottomAppBar />,
    filename: './BottomAppBar.txt',
    iframe: true,
  },
  {
    label: 'Hide App Bar',
    link: 'hide-app-bar',
    component: <HideAppBar />,
    filename: './HideAppBar.txt',
    iframe: true,
  },
  {
    label: 'Elevate App Bar',
    link: 'elevate-app-bar',
    component: <ElevateAppBar />,
    filename: './ElevateAppBar.txt',
    iframe: true,
  },
  {
    label: 'Back to top',
    link: 'back-to-top',
    component: <BackToTop />,
    filename: './BackToTop.txt',
    iframe: true,
  },
];

export default function AppBars() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="App Bar" menus={demos}>
      {demos.map((menu, index) => {
        const Sandbox = menu.iframe ? IframeWindow : React.Fragment;
        const sandboxProps = menu.iframe ? { title: `${menu.label} demo` } : {};

        return (
          <Box key={index} id={menu.link} className={classes.section}>
            <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
              {menu.label}
            </Typography>
            <CodeViewerCard code={requireRaw(menu.filename).default} language="jsx">
              <Sandbox {...sandboxProps}>{menu.component}</Sandbox>
            </CodeViewerCard>
          </Box>
        );
      })}
    </MuiComponentDemo>
  );
}
