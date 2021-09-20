import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import SimpleLineChart from './demo/SimpleLineChart';
import VerticalLineChart from './demo/VerticalLineChart';
import CustomizedDotLineChart from './demo/CustomizedDotLineChart';
import LineChartWithReferenceLines from './demo/LineChartWithReferenceLines';
import DashedLineChart from './demo/DashedLineChart';
import LineChartWithXAxisPading from './demo/LineChartWithXAxisPading';
import LineChartConnectNulls from './demo/LineChartConnectNulls';
import SynchronizedLineChart from './demo/SynchronizedLineChart';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/line', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Line Chart',
    link: 'simple-line-chart',
    component: <SimpleLineChart />,
    filename: './SimpleLineChart.txt',
  },
  {
    label: 'Vertical Line Chart',
    link: 'vertical-line-chart',
    component: <VerticalLineChart />,
    filename: './VerticalLineChart.txt',
  },
  {
    label: 'Customized Dot Line Chart',
    link: 'customized-dot-line-chart',
    component: <CustomizedDotLineChart />,
    filename: './CustomizedDotLineChart.txt',
  },
  {
    label: 'Dashed Line Chart',
    link: 'dashed-line-chart',
    component: <DashedLineChart />,
    filename: './DashedLineChart.txt',
  },
  {
    label: 'Line Chart With Reference Lines',
    link: 'line-chart-with-reference-lines',
    component: <LineChartWithReferenceLines />,
    filename: './LineChartWithReferenceLines.txt',
  },
  {
    label: 'Line Chart With X-Axis Padding',
    link: 'line-chart-with-x-axis-padding',
    component: <LineChartWithXAxisPading />,
    filename: './LineChartWithXAxisPading.txt',
  },
  {
    label: 'Line Chart Connect Nulls',
    link: 'line-chart-connect-nulls',
    component: <LineChartConnectNulls />,
    filename: './LineChartConnectNulls.txt',
  },
  {
    label: 'Synchronized Line Chart',
    link: 'synchronized-line-chart',
    component: <SynchronizedLineChart />,
    filename: './SynchronizedLineChart.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Line Charts', isActive: true },
];

export default function LineChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Line Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
