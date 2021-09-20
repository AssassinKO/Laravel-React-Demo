import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  tableCellRoot: {
    padding: '6px 10px',
    color: theme.palette.text.disabled,
    borderBottom: '0 none',
    '&:first-child': {
      paddingLeft: 15,
    },
    '&:last-child': {
      paddingRight: 15,
    },
  },
}));

const ListHeader = ({ contactsList, checkedContacts, handleHeaderCheckBox }) => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableCellRoot}>
          <Box display="flex" alignItems="center">
            <Box component="span" mr={2}>
              <Checkbox
                color="primary"
                indeterminate={checkedContacts.length > 0 && checkedContacts.length < contactsList.length}
                checked={checkedContacts.length > 0 && checkedContacts.length === contactsList.length}
                onChange={e => handleHeaderCheckBox(e.target.checked)}
              />
            </Box>
            Name
          </Box>
        </TableCell>
        <TableCell className={classes.tableCellRoot}>Email Address</TableCell>
        <TableCell className={classes.tableCellRoot}>Phone</TableCell>
        <TableCell className={classes.tableCellRoot}>Company</TableCell>
        <TableCell className={classes.tableCellRoot} />
      </TableRow>
    </TableHead>
  );
};

export default ListHeader;

ListHeader.prototype = {
  checkedContacts: PropTypes.array,
  contactsList: PropTypes.array,
  handleHeaderCheckBox: PropTypes.func,
};

ListHeader.defaultProps = {
  checkedContacts: [],
  contactList: [],
};
