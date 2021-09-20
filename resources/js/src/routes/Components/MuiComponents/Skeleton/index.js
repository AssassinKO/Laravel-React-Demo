import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import Variants from './demo/Variants';
import Animations from './demo/Animations';
import YouTube from './demo/YouTube';
import Facebook from './demo/Facebook';
import SkeletonTypography from './demo/SkeletonTypography';
import SkeletonChildren from './demo/SkeletonChildren';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/skeleton', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Variants',
    link: 'variants',
    component: <Variants />,
    filename: './Variants.txt',
  },
  {
    label: 'Animations',
    link: 'animations',
    component: <Animations />,
    filename: './Animations.txt',
  },
  {
    label: 'Pulsate example',
    link: 'pulsate-example',
    component: <YouTube />,
    filename: './YouTube.txt',
  },
  {
    label: 'Wave example',
    link: 'wave-example',
    component: <Facebook />,
    filename: './Facebook.txt',
  },
  {
    label: 'Inferring dimensions',
    link: 'inferring-dimensions',
    component: <SkeletonTypography />,
    filename: './SkeletonTypography.txt',
  },
  {
    label: 'Skeleton Children',
    link: 'skeleton-children',
    component: <SkeletonChildren />,
    filename: './SkeletonChildren.txt',
  },
];

export default function Skeleton() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Skeleton" menus={demos}>
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
