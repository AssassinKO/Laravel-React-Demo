import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleCollapse from './demo/SimpleCollapse';
import SimpleFade from './demo/SimpleFade';
import SimpleGrow from './demo/SimpleGrow';
import SimpleSlide from './demo/SimpleSlide';
import SimpleZoom from './demo/SimpleZoom';

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

const requireRaw = require.context(
  '!raw-loader!../../../../@fake-db/mui-components/transitions',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Collapse',
    link: 'collapse',
    component: <SimpleCollapse />,
    filename: './SimpleCollapse.txt',
  },
  {
    label: 'Fade',
    link: 'fade',
    component: <SimpleFade />,
    filename: './SimpleFade.txt',
  },
  {
    label: 'Grow',
    link: 'grow',
    component: <SimpleGrow />,
    filename: './SimpleGrow.txt',
  },
  {
    label: 'Slide',
    link: 'slide',
    component: <SimpleSlide />,
    filename: './SimpleSlide.txt',
  },
  {
    label: 'Zoom',
    link: 'zoom',
    component: <SimpleZoom />,
    filename: './SimpleZoom.txt',
  },
];

export default function Transitions() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Transitions" menus={demos}>
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
