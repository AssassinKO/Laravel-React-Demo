import React from 'react';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../ContactCell.style';
import PropTypes from 'prop-types';
import ContactCellOptions from '../ListTableView/ContactCellOptions';

const ContactCell = ({ contact, onShowContactDetail, onClickEditContact }) => {
  const classes = useStyles();

  const { name, email, phones, company, designation, profile_pic } = contact;
  return (
    <Box className={classes.gridContactCell} onClick={() => onShowContactDetail(contact)}>
      <Box className={classes.gridContactCellHeader} display="flex" mb={3}>
        <Box width={{ sm: 'calc(100% - 56px)' }} display="flex" alignItems="center">
          <Box mr={4}>
            <CmtAvatar size={40} src={profile_pic} alt={name} />
          </Box>

          <Box width="calc(100% - 56px)">
            <Typography className={classes.titleRoot} component="div" variant="h4">
              {name}
            </Typography>
            <Typography className={classes.subTitleRoot}>{designation}</Typography>
          </Box>
        </Box>
        <Box ml={{ sm: 'auto' }} onClick={e => e.stopPropagation()}>
          <ContactCellOptions contact={contact} onClickEditContact={onClickEditContact} />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        {email && (
          <Box mb={2} component="p" className={classes.textTruncate}>
            {email}
          </Box>
        )}
        <Box mb={2} component="p">
          {phones[0].phone}
        </Box>
        {company && <Box component="p">{company}</Box>}
      </Box>
    </Box>
  );
};

export default ContactCell;

ContactCell.prototype = {
  contact: PropTypes.object.isRequired,
  onShowContactDetail: PropTypes.func,
  onClickEditContact: PropTypes.func,
};
