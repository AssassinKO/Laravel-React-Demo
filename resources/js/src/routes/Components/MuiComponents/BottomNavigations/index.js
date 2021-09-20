import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SimpleBottomNavigation from './demo/SimpleBottomNavigation';
import LabelBottomNavigation from './demo/LabelBottomNavigation';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';

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
  '!raw-loader!../../../../@fake-db/mui-components/bottom-navigations',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Bottom Navigation',
    link: 'bottom-navigation',
    component: <SimpleBottomNavigation />,
    filename: './SimpleBottomNavigation.txt',
  },
  {
    label: 'Bottom Navigation with no label',
    link: 'bottom-navigation-with-no-label',
    component: <LabelBottomNavigation />,
    filename: './LabelBottomNavigation.txt',
  },
];

export default function BottomNavigations() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Bottom Navigation" menus={demos}>
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
