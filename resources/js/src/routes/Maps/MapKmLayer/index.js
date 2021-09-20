import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import MapKmLayerExample from './demo/MapKmLayerExample';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/maps', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Map KmLayer',
    link: 'map-km-layer',
    component: <MapKmLayerExample />,
    filename: './MapKmLayerExample.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Maps', link: '/visualization/map' },
  { label: 'Map Km-Layer', isActive: true },
];

export default function MapKmLayer() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Map Km-Layer" menus={demos} breadcrumbs={breadcrumbs}>
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
