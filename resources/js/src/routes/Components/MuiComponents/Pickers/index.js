import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MaterialUIPickers from './demos/MaterialUIPickers';
import DatePickers from './demos/DatePickers';
import DateAndTimePickers from './demos/DateAndTimePickers';
import TimePickers from './demos/TimePickers';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/pickers', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Material-ui Pickers',
    link: 'material-ui-pickers',
    component: <MaterialUIPickers />,
    filename: './MaterialUIPickers.txt',
  },
  {
    label: 'Native Date pickers',
    link: 'date-pickers',
    component: <DatePickers />,
    filename: './DatePickers.txt',
  },
  {
    label: 'Native Date & Time pickers',
    link: 'date-time-pickers',
    component: <DateAndTimePickers />,
    filename: './DateAndTimePickers.txt',
  },
  {
    label: 'Native Time pickers',
    link: 'time-pickers',
    component: <TimePickers />,
    filename: './TimePickers.txt',
  },
];
export default function Pickers() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Date / Time pickers" menus={demos}>
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
