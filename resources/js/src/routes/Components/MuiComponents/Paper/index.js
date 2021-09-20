import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimplePaper from './demo/SimplePaper';
import Variants from './demo/Variants';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/paper', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Paper',
    link: 'simple-paper',
    component: <SimplePaper />,
    filename: './SimplePaper.txt',
  },
  {
    label: 'Variants',
    link: 'variants',
    component: <Variants />,
    filename: './Variants.txt',
  },
];

export default function Papers() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Paper" menus={demos}>
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
