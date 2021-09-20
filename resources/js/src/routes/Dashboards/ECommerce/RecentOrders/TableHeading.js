import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  tableCellRoot: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    paddingBottom: 12,
    fontSize: 12,
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
}));

const TableHeading = () => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.tableCellRoot}>Order ID</TableCell>
      <TableCell className={classes.tableCellRoot}>Customer</TableCell>
      <TableCell className={classes.tableCellRoot}>Order Date</TableCell>
      <TableCell className={classes.tableCellRoot}>Delivery date</TableCell>
      <TableCell className={classes.tableCellRoot}>Status</TableCell>
      <TableCell className={classes.tableCellRoot} />
    </TableRow>
  );
};

export default TableHeading;
