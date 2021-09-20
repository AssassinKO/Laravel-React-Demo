import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import ClickAway from './demo/ClickAway';
import PortalClickAway from './demo/PortalClickAway';
import LeadingClickAway from './demo/LeadingClickAway';

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
  '!raw-loader!../../../../@fake-db/mui-components/click-away-listener',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Click Away',
    link: 'click-away',
    component: <ClickAway />,
    filename: './ClickAway.txt',
  },
  {
    label: 'Portal',
    link: 'portal',
    component: <PortalClickAway />,
    filename: './PortalClickAway.txt',
  },
  {
    label: 'Leading edge',
    link: 'leading-edge',
    component: <LeadingClickAway />,
    filename: './LeadingClickAway.txt',
  },
];

export default function ClickAwayListener() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Click away listener" menus={demos}>
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
