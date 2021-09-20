import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleNoSsr from './demo/SimpleNoSsr';
import FrameDeferring from './demo/FrameDeferring';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/no-ssr', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Client side deferring',
    link: 'client-side-deferring',
    component: <SimpleNoSsr />,
    filename: './SimpleNoSsr.txt',
  },
  {
    label: 'Frame deferring',
    link: 'frame-deferring',
    component: <FrameDeferring />,
    filename: './FrameDeferring.txt',
  },
];

export default function NoSsr() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="No SSR" menus={demos}>
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
