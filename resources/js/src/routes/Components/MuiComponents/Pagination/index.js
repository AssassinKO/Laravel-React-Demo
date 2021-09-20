import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import BasicPagination from './demo/BasicPagination';
import PaginationOutlined from './demo/PaginationOutlined';
import PaginationRounded from './demo/PaginationRounded';
import PaginationSize from './demo/PaginationSize';
import PaginationButtons from './demo/PaginationButtons';
import PaginationRanges from './demo/PaginationRanges';
import PaginationControlled from './demo/PaginationControlled';
import PaginationLink from './demo/PaginationLink';
import UsePagination from './demo/UsePagination';
import TablePaginationDemo from './demo/TablePaginationDemo';

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
  '!raw-loader!../../../../@fake-db/mui-components/pagination',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Basic pagination',
    link: 'basic-pagination',
    component: <BasicPagination />,
    filename: './BasicPagination.txt',
  },
  {
    label: 'Outlined pagination',
    link: 'outlined-pagination',
    component: <PaginationOutlined />,
    filename: './PaginationOutlined.txt',
  },
  {
    label: 'Rounded pagination',
    link: 'rounded-pagination',
    component: <PaginationRounded />,
    filename: './PaginationRounded.txt',
  },
  {
    label: 'Pagination size',
    link: 'pagination-size',
    component: <PaginationSize />,
    filename: './PaginationSize.txt',
  },
  {
    label: 'Buttons',
    link: 'buttons',
    component: <PaginationButtons />,
    filename: './PaginationButtons.txt',
  },
  {
    label: 'Pagination ranges',
    link: 'pagination-ranges',
    component: <PaginationRanges />,
    filename: './PaginationRanges.txt',
  },
  {
    label: 'Controlled pagination',
    link: 'controlled-pagination',
    component: <PaginationControlled />,
    filename: './PaginationControlled.txt',
  },
  {
    label: 'Router integration',
    link: 'router-integration',
    component: <PaginationLink />,
    filename: './PaginationLink.txt',
  },
  {
    label: 'usePagination',
    link: 'use-pagination',
    component: <UsePagination />,
    filename: './UsePagination.txt',
  },
  {
    label: 'Table pagination',
    link: 'table-pagination',
    component: <TablePaginationDemo />,
    filename: './TablePaginationDemo.txt',
  },
];

export default function Pagination() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Pagination" menus={demos}>
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
