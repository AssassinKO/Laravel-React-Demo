import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { updateStarredStatus } from '../../../../../../redux/actions/ContactApp';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import EditIcon from '@material-ui/icons/Edit';
import MoreOptions from './MoreOptions';

const useStyles = makeStyles(theme => ({
  contactCellOptionsRoot: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  starViewRoot: {
    transition: 'all 0.3s ease',
    transform: 'translateX(200%)',
  },
  actionOptionRoot: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: 'all 0.3s ease',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateX(100%)',
  },
}));

const ContactCellOptions = ({ contact, onClickEditContact }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const onClickStarredIcon = status => {
    dispatch(updateStarredStatus([contact.id], status));
  };

  const { starred } = contact;

  return (
    <Box className={classes.contactCellOptionsRoot} onClick={e => e.stopPropagation()}>
      <Box className={clsx(classes.starViewRoot, 'star-view')}>
        <Checkbox
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon style={{ color: '#FF8C00' }} />}
          checked={starred}
          onChange={e => onClickStarredIcon(e.target.checked)}
          size="small"
        />
      </Box>

      <Box className={clsx(classes.actionOptionRoot, 'action-option')}>
        <Box ml={1}>
          <Tooltip title="Edit">
            <IconButton size="small" onClick={() => onClickEditContact({ ...contact })}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <MoreOptions contact={contact} />
      </Box>
    </Box>
  );
};

export default ContactCellOptions;

ContactCellOptions.prototype = {
  contact: PropTypes.object.isRequired,
  onClickEditContact: PropTypes.func,
};
