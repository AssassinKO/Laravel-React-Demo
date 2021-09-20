import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleRating from './demo/SimpleRating';
import CustomizedRatings from './demo/CustomizedRatings';
import HoverRating from './demo/HoverRating';
import HalfRating from './demo/HalfRating';
import RatingSizes from './demo/RatingSizes';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/rating', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple ratings',
    link: 'simple-ratings',
    component: <SimpleRating />,
    filename: './SimpleRating.txt',
  },
  {
    label: 'Customized ratings',
    link: 'customized-ratings',
    component: <CustomizedRatings />,
    filename: './CustomizedRatings.txt',
  },
  {
    label: 'Hover feedback',
    link: 'hover-feedback',
    component: <HoverRating />,
    filename: './HoverRating.txt',
  },
  {
    label: 'Half ratings',
    link: 'half-ratings',
    component: <HalfRating />,
    filename: './HalfRating.txt',
  },
  {
    label: 'Sizes',
    link: 'sizes',
    component: <RatingSizes />,
    filename: './RatingSizes.txt',
  },
];

export default function Rating() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Rating" menus={demos}>
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
