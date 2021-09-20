import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../../@jumbo/components/Common';
import CkEditorExample from './demo/CkEditorExample';
import ComponentsDemo from '../../../../@jumbo/components/PageComponents/layouts/ComponentsDemo';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/extensions/editors', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Ck Editor',
    link: 'ck-editor',
    component: <CkEditorExample />,
    filename: './CkEditorExample.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'Editors', link: '/extensions/editors' },
  { label: 'Ck Editor', isActive: true },
];

export default function CkEditor() {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Editors" menus={demos} breadcrumbs={breadcrumbs}>
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
