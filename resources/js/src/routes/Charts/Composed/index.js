import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import LineBarAreaComposedChart from './demo/LineBarAreaComposedChart';
import VerticalComposedChart from './demo/VerticalComposedChart';
import SameDataComposedChart from './demo/SameDataComposedChart';
import ComposedChartWithAxisLabels from './demo/ComposedChartWithAxisLabels';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/composed', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Line Bar Area Composed Chart',
    link: 'line-bar-area-composed-chart',
    component: <LineBarAreaComposedChart />,
    filename: './LineBarAreaComposedChart.txt',
  },
  {
    label: 'Vertical Composed Chart',
    link: 'vertical-composed-chart',
    component: <VerticalComposedChart />,
    filename: './VerticalComposedChart.txt',
  },
  {
    label: 'Same Data Composed Chart',
    link: 'same-data-composed-chart',
    component: <SameDataComposedChart />,
    filename: './SameDataComposedChart.txt',
  },
  {
    label: 'Composed Chart With Axis Labels',
    link: 'composed-chart-with-axis-labels',
    component: <ComposedChartWithAxisLabels />,
    filename: './ComposedChartWithAxisLabels.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Tree Map Charts', isActive: true },
];

export default function ComposedChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Composed Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
