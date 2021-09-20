import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import BasicTimeline from './demo/BasicTimeline';
import RightAlignedTimeline from './demo/RightAlignedTimeline';
import AlternateTimeline from './demo/AlternateTimeline';
import ColorsTimeline from './demo/ColorsTimeline';
import OutlinedTimeline from './demo/OutlinedTimeline';
import OppositeContentTimeline from './demo/OppositeContentTimeline';
import CustomizedTimeline from './demo/CustomizedTimeline';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/timeline', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic timeline',
    link: 'basic-timeline',
    component: <BasicTimeline />,
    filename: './BasicTimeline.txt',
  },
  {
    label: 'Right aligned timeline',
    link: 'right-aligned-timeline',
    component: <RightAlignedTimeline />,
    filename: './RightAlignedTimeline.txt',
  },
  {
    label: 'Alternating timeline',
    link: 'alternating-timeline',
    component: <AlternateTimeline />,
    filename: './AlternateTimeline.txt',
  },
  {
    label: 'Color',
    link: 'color',
    component: <ColorsTimeline />,
    filename: './ColorsTimeline.txt',
  },
  {
    label: 'Outlined',
    link: 'outlined',
    component: <OutlinedTimeline />,
    filename: './OutlinedTimeline.txt',
  },
  {
    label: 'Opposite content',
    link: 'opposite-content',
    component: <OppositeContentTimeline />,
    filename: './OppositeContentTimeline.txt',
  },
  {
    label: 'Customized timeline',
    link: 'customized-timeline',
    component: <CustomizedTimeline />,
    filename: './CustomizedTimeline.txt',
  },
];

export default function Timeline() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Timeline" menus={demos}>
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
