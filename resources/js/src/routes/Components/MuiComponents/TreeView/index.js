import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import FileSystemNavigator from './demo/FileSystemNavigator';
import MultiSelectTreeView from './demo/MultiSelectTreeView';
import ControlledTreeView from './demo/ControlledTreeView';
import RecursiveTreeView from './demo/RecursiveTreeView';
import CustomizedTreeView from './demo/CustomizedTreeView';
import GmailTreeView from './demo/GmailTreeView';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/tree-view', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic tree view',
    link: 'basic-tree-view',
    component: <FileSystemNavigator />,
    filename: './FileSystemNavigator.txt',
  },
  {
    label: 'Multi selection',
    link: 'multi-selection',
    component: <MultiSelectTreeView />,
    filename: './MultiSelectTreeView.txt',
  },
  {
    label: 'Controlled tree view',
    link: 'multi-controlled-tree-view',
    component: <ControlledTreeView />,
    filename: './ControlledTreeView.txt',
  },
  {
    label: 'Rich object',
    link: 'rich-object',
    component: <RecursiveTreeView />,
    filename: './RecursiveTreeView.txt',
  },
  {
    label: 'Customized tree view',
    link: 'customized-tree-view',
    component: <CustomizedTreeView />,
    filename: './CustomizedTreeView.txt',
  },
  {
    label: 'Gmail clone',
    link: 'gmail-clone',
    component: <GmailTreeView />,
    filename: './GmailTreeView.txt',
  },
];

export default function TreeView() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Tree View" menus={demos}>
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
