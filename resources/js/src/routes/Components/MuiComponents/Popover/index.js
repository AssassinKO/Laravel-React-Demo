import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import AnchorPlayground from './demo/AnchorPlayground';
import MouseOverPopover from './demo/MouseOverPopover';
import PopoverPopupState from './demo/PopoverPopupState';
import SimplePopover from './demo/SimplePopover';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/popover', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Popover',
    link: 'simple-popover',
    component: <SimplePopover />,
    filename: './SimplePopover.txt',
  },
  {
    label: 'Anchor Playground',
    link: 'anchor-playground',
    component: <AnchorPlayground />,
    filename: './AnchorPlayground.txt',
  },
  {
    label: 'Mouse over interaction',
    link: 'mouse-over-interaction',
    component: <MouseOverPopover />,
    filename: './MouseOverPopover.txt',
  },
  {
    label: 'PopupState helper',
    link: 'popup-state-helper',
    component: <PopoverPopupState />,
    filename: './PopoverPopupState.txt',
  },
];

export default function Popover() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Popover" menus={demos}>
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
