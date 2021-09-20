import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimplePopper from './demo/SimplePopper';
import TransitionsPopper from './demo/TransitionsPopper';
import SpringPopper from './demo/SpringPopper';
import PositionedPopper from './demo/PositionedPopper';
import ScrollPlayground from './demo/ScrollPlayground';
import FakedReferencePopper from './demo/FakedReferencePopper';
import PopperPopupState from './demo/PopperPopupState';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/popper', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Popper',
    link: 'simple-popper',
    component: <SimplePopper />,
    filename: './SimplePopper.txt',
  },
  {
    label: 'Transitions',
    link: 'transitions',
    component: <TransitionsPopper />,
    filename: './TransitionsPopper.txt',
  },
  {
    label: 'Spring Popper',
    link: 'spring-popper',
    component: <SpringPopper />,
    filename: './SpringPopper.txt',
  },
  {
    label: 'Positioned Popper',
    link: 'positioned-popper',
    component: <PositionedPopper />,
    filename: './PositionedPopper.txt',
  },
  {
    label: 'Scroll playground',
    link: 'scroll-playground',
    component: <ScrollPlayground />,
    filename: './ScrollPlayground.txt',
  },
  {
    label: 'Faked reference object',
    link: 'faked-reference-object',
    component: <FakedReferencePopper />,
    filename: './FakedReferencePopper.txt',
  },
  {
    label: 'PopupState helper',
    link: 'popup-state-helper',
    component: <PopperPopupState />,
    filename: './PopperPopupState.txt',
  },
];

export default function Popper() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Popper" menus={demos}>
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
