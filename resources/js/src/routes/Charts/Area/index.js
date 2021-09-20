import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import AreaChartConnectNulls from './demo/AreaChartConnectNulls';
import SimpleAreaChart from './demo/SimpleAreaChart';
import StackedAreaChart from './demo/StackedAreaChart';
import SynchronizedAreaChart from './demo/SynchronizedAreaChart';
import PercentAreaChart from './demo/PercentAreaChart';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/area', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Area Chart',
    link: 'simple-area-chart',
    component: <SimpleAreaChart />,
    filename: './SimpleAreaChart.txt',
  },
  {
    label: 'Stacked Area Chart',
    link: 'stacked-area-chart',
    component: <StackedAreaChart />,
    filename: './StackedAreaChart.txt',
  },
  {
    label: 'Area Chart Connect Nulls',
    link: 'area-chart-connect-nulls',
    component: <AreaChartConnectNulls />,
    filename: './AreaChartConnectNulls.txt',
  },
  {
    label: 'Synchronized Area Chart',
    link: 'synchronized-area-chart',
    component: <SynchronizedAreaChart />,
    filename: './SynchronizedAreaChart.txt',
  },
  {
    label: 'Percent Area Chart',
    link: 'percent-area-chart',
    component: <PercentAreaChart />,
    filename: './PercentAreaChart.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Area Charts', isActive: true },
];

export default function AreaChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Area Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
