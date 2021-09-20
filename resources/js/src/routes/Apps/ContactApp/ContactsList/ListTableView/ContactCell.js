import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../ContactCell.style';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ContactCellOptions from './ContactCellOptions';

const ContactCell = ({ contact, checkedContacts, handleCellCheckBox, onShowContactDetail, onClickEditContact }) => {
  const classes = useStyles();
  const { id, name, email, phones, company, designation, profile_pic } = contact;
  return (
    <TableRow className={classes.tableRowRoot} onClick={() => onShowContactDetail(contact)}>
      <TableCell className={classes.tableCellRoot}>
        <Box display="flex" alignItems="center">
          <Box component="span" mr={2} onClick={e => e.stopPropagation()}>
            <Checkbox
              color="primary"
              checked={checkedContacts.includes(id)}
              onChange={event => handleCellCheckBox(event.target.checked, id)}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={{ xs: 4, md: 5 }}>
              <CmtAvatar size={40} src={profile_pic} alt={name} />
            </Box>

            <Box>
              <Typography className={classes.titleRoot} component="div" variant="h4">
                {name}
              </Typography>
              <Typography className={classes.subTitleRoot}>{designation}</Typography>
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell className={classes.tableCellRoot}>{email}</TableCell>
      <TableCell className={classes.tableCellRoot}>{phones[0].phone}</TableCell>
      <TableCell className={classes.tableCellRoot}>{company}</TableCell>
      <TableCell className={clsx(classes.tableCellRoot, classes.tableCellAction)}>
        <ContactCellOptions contact={contact} onClickEditContact={onClickEditContact} />
      </TableCell>
    </TableRow>
  );
};

export default ContactCell;

ContactCell.prototype = {
  contact: PropTypes.object.isRequired,
  checkedContacts: PropTypes.array,
  handleCellCheckBox: PropTypes.func,
  onShowContactDetail: PropTypes.func,
  onClickEditContact: PropTypes.func,
};

ContactCell.defaultProps = {
  checkedContacts: [],
};
