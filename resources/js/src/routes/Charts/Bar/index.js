import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import TinyBarChart from './demo/TinyBarChart';
import StackedBarChart from './demo/StackedBarChart';
import MixBarChart from './demo/MixBarChart';
import CustomShapeBarChart from './demo/CustomShapeBarChart';
import PositiveAndNegativeBarChart from './demo/PositiveAndNegativeBarChart';
import BarChartStackedBySign from './demo/BarChartStackedBySign';
import BiaxialBarChart from './demo/BiaxialBarChart';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/bar', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Tiny Bar Chart',
    link: 'tiny-bar-chart',
    component: <TinyBarChart />,
    filename: './TinyBarChart.txt',
  },
  {
    label: 'Stacked Bar Chart',
    link: 'stacked-bar-chart',
    component: <StackedBarChart />,
    filename: './StackedBarChart.txt',
  },
  {
    label: 'Mix Bar Chart',
    link: 'mix-bar-chart',
    component: <MixBarChart />,
    filename: './MixBarChart.txt',
  },
  {
    label: 'Custom Shape Bar Chart',
    link: 'custom-shape-bar-chart',
    component: <CustomShapeBarChart />,
    filename: './CustomShapeBarChart.txt',
  },
  {
    label: 'Positive And Negative Bar Chart',
    link: 'positive-and-negative-bar-chart',
    component: <PositiveAndNegativeBarChart />,
    filename: './PositiveAndNegativeBarChart.txt',
  },
  {
    label: 'Bar Chart Stacked By Sign',
    link: 'bar-chart-stacked-by-sign',
    component: <BarChartStackedBySign />,
    filename: './BarChartStackedBySign.txt',
  },
  {
    label: 'Biaxial Bar Chart',
    link: 'biaxial-bar-chart',
    component: <BiaxialBarChart />,
    filename: './BiaxialBarChart.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Bar Charts', isActive: true },
];

export default function BarChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Bar Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
