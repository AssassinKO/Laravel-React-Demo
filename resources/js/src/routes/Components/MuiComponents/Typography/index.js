import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import Types from './demo/Types';
import TypographyTheme from './demo/TypographyTheme';

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
  '!raw-loader!../../../../@fake-db/mui-components/typography',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Component',
    link: 'component',
    component: <Types />,
    filename: './Types.txt',
  },
  {
    label: 'Theme',
    link: 'theme',
    component: <TypographyTheme />,
    filename: './TypographyTheme.txt',
  },
];

export default function CustomTypography() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Typography" menus={demos}>
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
