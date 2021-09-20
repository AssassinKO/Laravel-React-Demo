import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleSpeedDials from './demo/SimpleSpeedDials';
import OpenIconSpeedDial from './demo/OpenIconSpeedDial';
import SpeedDialTooltipOpen from './demo/SpeedDialTooltipOpen';

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

const requireRaw = require.context(
  '!raw-loader!../../../../@fake-db/mui-components/speed-dial',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Simple Speed Dial',
    link: 'simple-speed-dial',
    component: <SimpleSpeedDials />,
    filename: './SimpleSpeedDials.txt',
  },
  {
    label: 'Custom close icon',
    link: 'custom-close-icon',
    component: <OpenIconSpeedDial />,
    filename: './OpenIconSpeedDial.txt',
  },
  {
    label: 'Persistent action tooltips',
    link: 'persistent-action-tooltips',
    component: <SpeedDialTooltipOpen />,
    filename: './SpeedDialTooltipOpen.txt',
  },
];

export default function SpeedDial() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Speed Dial" menus={demos}>
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
