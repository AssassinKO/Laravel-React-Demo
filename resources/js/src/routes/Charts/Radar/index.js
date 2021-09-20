import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import SimpleRadarChart from './demo/SimpleRadarChart';
import SpecifiedDomainRadarChart from './demo/SpecifiedDomainRadarChart';
import ComponentsDemo from '../../../@jumbo/components/PageComponents/layouts/ComponentsDemo';

const useStyles = makeStyles(theme => ({
  section: {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(32),
    },
    '& .recharts-text': {
      fill: theme.palette.text.primary,
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },
}));

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/radar', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Radar Chart',
    link: 'simple-radar-chart',
    component: <SimpleRadarChart />,
    filename: './SimpleRadarChart.txt',
  },
  {
    label: 'Specified Domain Radar Chart',
    link: 'specified-domain-radar-chart',
    component: <SpecifiedDomainRadarChart />,
    filename: './SpecifiedDomainRadarChart.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Radar Charts', isActive: true },
];

export default function RadarChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Radar Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
