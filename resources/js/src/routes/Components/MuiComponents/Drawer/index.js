import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import TemporaryDrawer from './demo/TemporaryDrawer';
import SwipeableTemporaryDrawer from './demo/SwipeableTemporaryDrawer';
import ResponsiveDrawer from './demo/ResponsiveDrawer';
import PersistentDrawerLeft from './demo/PersistentDrawerLeft';
import PersistentDrawerRight from './demo/PersistentDrawerRight';
import MiniDrawer from './demo/MiniDrawer';
import PermanentDrawerLeft from './demo/PermanentDrawerLeft';
import PermanentDrawerRight from './demo/PermanentDrawerRight';
import ClippedDrawer from './demo/ClippedDrawer';

const useStyles = makeStyles(theme => ({
  section: {
    position: 'relative',
    zIndex: 1,
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(32),
    },
    '& .Cmt-card-content': {
      overflow: 'hidden',
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },
}));

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/drawer', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Temporary drawer',
    link: 'temporary-drawer',
    component: <TemporaryDrawer />,
    filename: './TemporaryDrawer.txt',
  },
  {
    label: 'Swipeable',
    link: 'Swipeable',
    component: <SwipeableTemporaryDrawer />,
    filename: './SwipeableTemporaryDrawer.txt',
  },
  {
    label: 'Responsive drawer',
    link: 'responsive-drawer',
    component: <ResponsiveDrawer />,
    filename: './ResponsiveDrawer.txt',
  },
  {
    label: 'Persistent drawer left',
    link: 'persistent-drawer-left',
    component: <PersistentDrawerLeft />,
    filename: './PersistentDrawerLeft.txt',
  },
  {
    label: 'Persistent drawer right',
    link: 'persistent-drawer-right',
    component: <PersistentDrawerRight />,
    filename: './PersistentDrawerRight.txt',
  },
  {
    label: 'Mini variant drawer',
    link: 'mini-variant-drawer',
    component: <MiniDrawer />,
    filename: './MiniDrawer.txt',
  },
  {
    label: 'Permanent drawer left',
    link: 'permanent-drawer-left',
    component: <PermanentDrawerLeft />,
    filename: './PermanentDrawerLeft.txt',
  },
  {
    label: 'Permanent drawer right',
    link: 'permanent-drawer-right',
    component: <PermanentDrawerRight />,
    filename: './PermanentDrawerRight.txt',
  },
  {
    label: 'Clipped under the app bar',
    link: 'clipped-under-the-app-bar',
    component: <ClippedDrawer />,
    filename: './ClippedDrawer.txt',
  },
];

export default function Drawer() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Drawer" menus={demos}>
      {demos.map((menu, index) => (
        <Box key={index} id={menu.link} className={classes.section}>
          <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
            {menu.label}
          </Typography>
          <CodeViewerCard code={requireRaw(menu.filename).default} language="jsx">
            {menu.component}
          </CodeViewerCard>
        </Box>
      ))}
    </MuiComponentDemo>
  );
}
