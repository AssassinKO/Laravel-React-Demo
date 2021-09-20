import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleModal from './demo/SimpleModal';
import TransitionsModal from './demo/TransitionsModal';
import SpringModal from './demo/SpringModal';
import ServerModal from './demo/ServerModal';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/modal', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple modal',
    link: 'simple-modal',
    component: <SimpleModal />,
    filename: './SimpleModal.txt',
  },
  {
    label: 'Transitions',
    link: 'transitions',
    component: <TransitionsModal />,
    filename: './TransitionsModal.txt',
  },
  {
    label: 'Spring Modal',
    link: 'spring-modal',
    component: <SpringModal />,
    filename: './SpringModal.txt',
  },
  {
    label: 'Server-side modal',
    link: 'server-side-modal',
    component: <ServerModal />,
    filename: './ServerModal.txt',
  },
];

export default function Modal() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Modal" menus={demos}>
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
