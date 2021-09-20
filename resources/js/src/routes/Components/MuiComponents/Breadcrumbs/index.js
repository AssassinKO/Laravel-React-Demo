import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleBreadcrumbs from './demo/SimpleBreadcrumbs';
import ActiveLastBreadcrumb from './demo/ActiveLastBreadcrumb';
import CustomSeparator from './demo/CustomSeparator';
import IconBreadcrumbs from './demo/IconBreadcrumbs';
import CollapsedBreadcrumbs from './demo/CollapsedBreadcrumbs';
import CustomizedBreadcrumbs from './demo/CustomizedBreadcrumbs';
import RouterBreadcrumbs from './demo/RouterBreadcrumbs';

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
  '!raw-loader!../../../../@fake-db/mui-components/breadcrumbs',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Simple breadcrumbs',
    link: 'simple-breadcrumbs',
    component: <SimpleBreadcrumbs />,
    filename: './SimpleBreadcrumbs.txt',
  },
  {
    label: 'Active last breadcrumb',
    link: 'active-last-breadcrumb',
    component: <ActiveLastBreadcrumb />,
    filename: './ActiveLastBreadcrumb.txt',
  },
  {
    label: 'Custom separator',
    link: 'custom-separator',
    component: <CustomSeparator />,
    filename: './CustomSeparator.txt',
  },
  {
    label: 'Breadcrumbs with icons',
    link: 'breadcrumbs-with-icons',
    component: <IconBreadcrumbs />,
    filename: './IconBreadcrumbs.txt',
  },
  {
    label: 'Collapsed breadcrumbs',
    link: 'collapsed-breadcrumbs',
    component: <CollapsedBreadcrumbs />,
    filename: './CollapsedBreadcrumbs.txt',
  },
  {
    label: 'Customized breadcrumbs',
    link: 'customized-breadcrumbs',
    component: <CustomizedBreadcrumbs />,
    filename: './CustomizedBreadcrumbs.txt',
  },
  {
    label: 'Integration with react-router',
    link: 'integration-with-react-router',
    component: <RouterBreadcrumbs />,
    filename: './RouterBreadcrumbs.txt',
  },
];

export default function Breadcrumbs() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Breadcrumbs" menus={demos}>
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
