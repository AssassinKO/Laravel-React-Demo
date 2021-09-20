import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import SimpleTreemap from './demo/SimpleTreemap';
import CustomContentTreemap from './demo/CustomContentTreemap';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/charts/tree-map', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Tree Map',
    link: 'simple-tree-map',
    component: <SimpleTreemap />,
    filename: './SimpleTreemap.txt',
  },
  {
    label: 'Custom Content Treemap',
    link: 'Custom Content Treemap',
    component: <CustomContentTreemap />,
    filename: './CustomContentTreemap.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Charts', link: '/visualization/chart' },
  { label: 'Map Km-Layer', isActive: true },
];

export default function TreeMapChart() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Tree Map Charts" menus={demos} breadcrumbs={breadcrumbs}>
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
