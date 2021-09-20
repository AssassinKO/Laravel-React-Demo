import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import TwoLevelPieChart from './demo/TwoLevelPieChart';
import StraightAnglePieChart from './demo/StraightAnglePieChart';
import CustomActiveShapePieChart from './demo/CustomActiveShapePieChart';
import PieChartWithCustomizedLabel from './demo/PieChartWithCustomizedLabel';
import TwoSimplePieChart from './demo/TwoSimplePieChart';
import PieChartWithPaddingAngle from './demo/PieChartWithPaddingAngle';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/pie', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Two Level Pie Chart',
    link: 'two-level-pie-chart',
    component: <TwoLevelPieChart />,
    filename: './TwoLevelPieChart.txt',
  },
  {
    label: 'Straight Angle Pie Chart',
    link: 'straight-angle-pie-chart',
    component: <StraightAnglePieChart />,
    filename: './TwoLevelPieChart.txt',
  },
  {
    label: 'Custom Active Shape Pie Chart',
    link: 'custom-active-shape-pie-chart',
    component: <CustomActiveShapePieChart />,
    filename: './TwoLevelPieChart.txt',
  },
  {
    label: 'Pie Chart With Customized Label',
    link: 'pie-chart-with-customized-label',
    component: <PieChartWithCustomizedLabel />,
    filename: './TwoLevelPieChart.txt',
  },
  {
    label: 'Two Simple Pie Chart',
    link: 'two-simple-pie-chart',
    component: <TwoSimplePieChart />,
    filename: './TwoLevelPieChart.txt',
  },
  {
    label: 'Pie Chart With Padding Angle',
    link: 'pie-chart-with-padding-angle',
    component: <PieChartWithPaddingAngle />,
    filename: './TwoLevelPieChart.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Pie Charts', isActive: true },
];

export default function PieChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Pie Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
