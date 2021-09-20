import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  tableRowCellRoot: {
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 16,
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
      <TableCell className={classes.tableRowCellRoot}>Project.</TableCell>
      <TableCell className={classes.tableRowCellRoot}>Date</TableCell>
      <TableCell className={classes.tableRowCellRoot}>Status</TableCell>
      <TableCell className={classes.tableRowCellRoot}>Team</TableCell>
      <TableCell className={classes.tableRowCellRoot} />
    </TableRow>
  );
};

export default TableHeading;
