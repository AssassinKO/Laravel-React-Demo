import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MuiComponentDemo } from '../../../@jumbo/components/PageComponents';
import { CodeViewerCard } from '../../../@jumbo/components/Common';
import MapDirectionsExample from './demo/MapDirectionsExample';

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
    label: 'Map Directions',
    link: 'map-directions',
    component: <MapDirectionsExample />,
    filename: './MapDirectionsExample.txt',
  },
];

export default function MapDirections() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Map Directions" menus={demos}>
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
