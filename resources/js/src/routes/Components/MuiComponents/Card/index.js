import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleCard from './demo/SimpleCard';
import OutlinedCard from './demo/OutlinedCard';
import RecipeReviewCard from './demo/RecipeReviewCard';
import MediaCard from './demo/MediaCard';
import ImgMediaCard from './demo/ImgMediaCard';
import MediaControlCard from './demo/MediaControlCard';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/card', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Card',
    link: 'simple-card',
    component: <SimpleCard />,
    filename: './SimpleCard.txt',
  },
  {
    label: 'Outlined Card',
    link: 'outlined-card',
    component: <OutlinedCard />,
    filename: './OutlinedCard.txt',
  },
  {
    label: 'Complex Interaction',
    link: 'complex-interaction',
    component: <RecipeReviewCard />,
    filename: './RecipeReviewCard.txt',
  },
  {
    label: 'Media',
    link: 'media',
    component: <MediaCard />,
    filename: './MediaCard.txt',
  },
  {
    label: 'Image Media',
    link: 'img-media',
    component: <ImgMediaCard />,
    filename: './ImgMediaCard.txt',
  },
  {
    label: 'UI Controls',
    link: 'ui-controls',
    component: <MediaControlCard />,
    filename: './MediaControlCard.txt',
  },
];

export default function Cards() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Card" menus={demos}>
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
