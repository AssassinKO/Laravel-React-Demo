import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../@jumbo/components/Common/CodeViewerCard';
import Notifications from './demo/Notifications';
import ComponentsDemo from '../../../@jumbo/components/PageComponents/layouts/ComponentsDemo';

const useStyles = makeStyles(theme => ({
  section: {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(32),
    },
    '& .Cmt-card-content': {
      position: 'static',
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },
}));

const requireRaw = require.context('!raw-loader!../../../@fake-db/extensions/notifications', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'React Notifications',
    link: 'react-notifications',
    component: <Notifications />,
    filename: './Notifications.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'React Notifications', isActive: true },
];

const ReactNotifications = () => {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="React Notifications" menus={demos} breadcrumbs={breadcrumbs}>
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
    </ComponentsDemo>
  );
};

export default ReactNotifications;
