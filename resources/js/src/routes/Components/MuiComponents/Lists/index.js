import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleList from './demo/SimpleList';
import NestedList from './demo/NestedList';
import FolderList from './demo/FolderList';
import InteractiveList from './demo/InteractiveList';
import SelectedListItem from './demo/SelectedListItem';
import AlignItemsList from './demo/AlignItemsList';
import CheckboxList from './demo/CheckboxList';
import CheckboxListSecondary from './demo/CheckboxListSecondary';
import SwitchListSecondary from './demo/SwitchListSecondary';
import PinnedSubheaderList from './demo/PinnedSubheaderList';
import InsetList from './demo/InsetList';
import VirtualizedList from './demo/VirtualizedList';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/lists', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple List',
    link: 'simple-list',
    component: <SimpleList />,
    filename: './SimpleList.txt',
  },
  {
    label: 'Nested List',
    link: 'nested-list',
    component: <NestedList />,
    filename: './NestedList.txt',
  },
  {
    label: 'Folder List',
    link: 'folder-list',
    component: <FolderList />,
    filename: './FolderList.txt',
  },
  {
    label: 'Interactive',
    link: 'interactive',
    component: <InteractiveList />,
    filename: './InteractiveList.txt',
  },
  {
    label: 'Selected ListItem',
    link: 'Selected ListItem',
    component: <SelectedListItem />,
    filename: './SelectedListItem.txt',
  },
  {
    label: 'Align list items',
    link: 'align-list-items',
    component: <AlignItemsList />,
    filename: './AlignItemsList.txt',
  },
  {
    label: 'Checkbox List',
    link: 'checkbox-list',
    component: <CheckboxList />,
    filename: './CheckboxList.txt',
  },
  {
    label: 'Checkbox List Secondary',
    link: 'checkbox-list-secondary',
    component: <CheckboxListSecondary />,
    filename: './CheckboxListSecondary.txt',
  },
  {
    label: 'Switch',
    link: 'switch',
    component: <SwitchListSecondary />,
    filename: './SwitchListSecondary.txt',
  },
  {
    label: 'Pinned Subheader List',
    link: 'pinned-subheader-list',
    component: <PinnedSubheaderList />,
    filename: './PinnedSubheaderList.txt',
  },
  {
    label: 'Inset List',
    link: 'inset-list',
    component: <InsetList />,
    filename: './InsetList.txt',
  },
  {
    label: 'Virtualized List',
    link: 'virtualized-list',
    component: <VirtualizedList />,
    filename: './VirtualizedList.txt',
  },
];

export default function Lists() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Lists" menus={demos}>
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
