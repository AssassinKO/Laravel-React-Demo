import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import ButtonLink from './demo/ButtonLink';
import SimpleLinks from './demo/SimpleLinks';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/links', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple links',
    link: 'simple-links',
    component: <SimpleLinks />,
    filename: './SimpleLinks.txt',
  },
  {
    label: 'Accessibility',
    link: 'accessibility',
    component: <ButtonLink />,
    filename: './ButtonLink.txt',
  },
];

export default function Links() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Links" menus={demos}>
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
