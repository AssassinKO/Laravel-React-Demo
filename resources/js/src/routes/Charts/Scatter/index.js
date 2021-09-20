import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import SimpleScatterChart from './demo/SimpleScatterChart';
import ThreeDimScatterChart from './demo/ThreeDimScatterChart';
import ComponentsDemo from '../../../@jumbo/components/PageComponents/layouts/ComponentsDemo';

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

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/scatter', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Scatter Chart',
    link: 'simple-scatter-chart',
    component: <SimpleScatterChart />,
    filename: './SimpleScatterChart.txt',
  },
  {
    label: 'Three Dim Scatter Chart',
    link: 'three-dim-scatter-chart',
    component: <ThreeDimScatterChart />,
    filename: './ThreeDimScatterChart.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Scatter Charts', isActive: true },
];

export default function ScatterChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Scatter Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
    </ComponentsDemo>
  );
}
