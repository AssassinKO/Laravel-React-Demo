import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../@jumbo/components/Common/CodeViewerCard';
import DragAndDropExample from './demo/DragAndDropExample';
import ComponentsDemo from '../../../@jumbo/components/PageComponents/layouts/ComponentsDemo';

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

const requireRaw = require.context('!raw-loader!../../../@fake-db/extensions/drag-and-drop', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Drag & Drop',
    link: 'drag-and-drop',
    component: <DragAndDropExample />,
    filename: './DragAndDropExample.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'Drag & Drop', isActive: true },
];

export default function DragAndDrop() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Drag & Drop" menus={demos} breadcrumbs={breadcrumbs}>
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
}
