import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleAlerts from './demo/SimpleAlerts';
import DescriptionAlerts from './demo/DescriptionAlerts';
import ActionAlerts from './demo/ActionAlerts';
import TransitionAlerts from './demo/TransitionAlerts';
import IconAlerts from './demo/IconAlerts';
import OutlinedAlerts from './demo/OutlinedAlerts';
import FilledAlerts from './demo/FilledAlerts';
import ColorAlerts from './demo/ColorAlerts';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/alert', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple alerts',
    link: 'simple-alerts',
    component: <SimpleAlerts />,
    filename: './SimpleAlerts.txt',
  },
  {
    label: 'Description',
    link: 'description',
    component: <DescriptionAlerts />,
    filename: './DescriptionAlerts.txt',
  },
  {
    label: 'Actions',
    link: 'actions',
    component: <ActionAlerts />,
    filename: './ActionAlerts.txt',
  },
  {
    label: 'Transition',
    link: 'transition',
    component: <TransitionAlerts />,
    filename: './TransitionAlerts.txt',
  },
  {
    label: 'Icons',
    link: 'icons',
    component: <IconAlerts />,
    filename: './IconAlerts.txt',
  },
  {
    label: 'Outlined',
    link: 'outlined',
    component: <OutlinedAlerts />,
    filename: './OutlinedAlerts.txt',
  },
  {
    label: 'Filled',
    link: 'filled',
    component: <FilledAlerts />,
    filename: './FilledAlerts.txt',
  },
  {
    label: 'Color',
    link: 'color',
    component: <ColorAlerts />,
    filename: './ColorAlerts.txt',
  },
];

export default function Alert() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Alert" menus={demos}>
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
