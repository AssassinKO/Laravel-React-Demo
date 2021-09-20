import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleTable from './demo/SimpleTable';
import DenseTable from './demo/DenseTable';
import EnhancedTable from './demo/EnhancedTable';
import CustomizedTables from './demo/CustomizedTables';
import CustomPaginationActionsTable from './demo/CustomPaginationActionsTable';
import StickyHeadTable from './demo/StickyHeadTable';
import CollapsibleTable from './demo/CollapsibleTable';
import SpanningTable from './demo/SpanningTable';
import ReactVirtualizedTable from './demo/ReactVirtualizedTable';
import MaterialTableDemo from './demo/MaterialTableDemo';
import AcccessibleTable from './demo/AcccessibleTable';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/table', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Table',
    link: 'simple-table',
    component: <SimpleTable />,
    filename: './SimpleTable.txt',
  },
  {
    label: 'Dense Table',
    link: 'dense-table',
    component: <DenseTable />,
    filename: './DenseTable.txt',
  },
  {
    label: 'Sorting & Selecting',
    link: 'sorting-and-selecting',
    component: <EnhancedTable />,
    filename: './EnhancedTable.txt',
  },
  {
    label: 'Customized tables',
    link: 'customized-tables',
    component: <CustomizedTables />,
    filename: './CustomizedTables.txt',
  },
  {
    label: 'Custom pagination actions',
    link: 'custom-pagination-actions',
    component: <CustomPaginationActionsTable />,
    filename: './CustomPaginationActionsTable.txt',
  },
  {
    label: 'Fixed header',
    link: 'fixed-header',
    component: <StickyHeadTable />,
    filename: './StickyHeadTable.txt',
  },
  {
    label: 'Collapsible table',
    link: 'collapsible-table',
    component: <CollapsibleTable />,
    filename: './CollapsibleTable.txt',
  },
  {
    label: 'Spanning Table',
    link: 'spanning-table',
    component: <SpanningTable />,
    filename: './SpanningTable.txt',
  },
  {
    label: 'Virtualized Table',
    link: 'virtualized-table',
    component: <ReactVirtualizedTable />,
    filename: './ReactVirtualizedTable.txt',
  },
  {
    label: 'Complementary projects',
    link: 'complementary-projects',
    component: <MaterialTableDemo />,
    filename: './MaterialTableDemo.txt',
  },
  {
    label: 'Caption',
    link: 'caption',
    component: <AcccessibleTable />,
    filename: './AcccessibleTable.txt',
  },
];

export default function Table() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Table" menus={demos}>
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
