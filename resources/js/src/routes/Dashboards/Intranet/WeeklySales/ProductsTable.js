import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  scrollbarRoot: {
    height: 251,
    marginLeft: -24,
    marginRight: -24,
    [theme.breakpoints.up('xl')]: {
      height: 269,
    },
  },
  tableRowRoot: {
    position: 'relative',
    transition: 'all .2s',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      borderTopColor: 'transparent',
      '& $tableCellRoot': {
        color: theme.palette.text.primary,
        '&:last-child': {
          color: theme.palette.error.main,
        },
        '&.success': {
          color: theme.palette.success.main,
        },
      },
    },
    '&:last-child': {
      borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
    },
  },
  tableCellRoot: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    letterSpacing: 0.4,
    color: theme.palette.common.dark,
    borderBottom: '0 none',
    '&:first-child': {
      paddingLeft: 24,
    },
    '&:last-child': {
      textAlign: 'right',
      paddingRight: 24,
    },
  },
  tableRowCellRoot: {
    fontSize: 12,
    '&:last-child': {
      paddingRight: 64,
    },
  },
  blockRoot: {
    display: 'block',
    fontSize: 14,
  },
}));

const actions = [
  {
    label: 'View Profile',
  },
  {
    label: 'More',
  },
];

const ProductsTable = ({ selectedProducts }) => {
  const classes = useStyles();
  return (
    <PerfectScrollbar className={classes.scrollbarRoot}>
      <Box className="Cmt-table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={clsx(classes.tableCellRoot, classes.tableRowCellRoot)}>Product</TableCell>
              <TableCell className={clsx(classes.tableCellRoot, classes.tableRowCellRoot)}>Sales</TableCell>
              <TableCell className={clsx(classes.tableCellRoot, classes.tableRowCellRoot)}>Income(USD)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedProducts.map((row, index) => {
              const isInflationPositive = row.sales_data.sales_inflation > 0;
              return (
                <TableRow className={classes.tableRowRoot} key={index}>
                  <TableCell className={classes.tableCellRoot}>{row.name}</TableCell>
                  <TableCell className={classes.tableCellRoot}>
                    <Box display="flex" alignItems="center" justifyContent="space-around">
                      <Box component="span">{row.sales_data.sold_qty}</Box>
                      <Box display="flex" alignItems="center">
                        <Box component="span" ml={1} color={isInflationPositive ? 'green' : 'red'}>
                          {row.sales_data.sales_inflation}
                        </Box>
                        <Box color={isInflationPositive ? 'green' : 'red'} ml={1}>
                          {isInflationPositive ? (
                            <TrendingUpIcon className={classes.blockRoot} />
                          ) : (
                            <TrendingDownIcon className={classes.blockRoot} />
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.tableCellRoot}>
                    <Box display="flex" alignItems="center" justifyContent="flex-end">
                      {row.sales_data.income}
                      <CmtDropdownMenu
                        TriggerComponent={
                          <Tooltip title="More">
                            <IconButton size="small" style={{ marginLeft: 10 }}>
                              <MoreVertIcon />
                            </IconButton>
                          </Tooltip>
                        }
                        items={actions}
                        onItemClick={() => {}}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  );
};

export default ProductsTable;
