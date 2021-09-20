import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { updateFvrtStatus, updateImprtntStatus, updateReadStatus } from '../../../../../redux/actions/MailApp';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(theme => ({
  borderLeft: {
    width: 1,
    height: 36,
    backgroundColor: alpha(theme.palette.common.dark, 0.12),
    marginLeft: 4,
  },
  iconBtn: {
    [theme.breakpoints.down('sm')]: {
      padding: 6,
      '& .MuiSvgIcon-root': {
        fontSize: 18,
      },
    },
  },
}));

const MoreOptions = ({ checkedMails, setCheckedMails, mailsList }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showMoreOptions, setShowMoreOptions] = useState(null);

  const mails = mailsList.filter(mail => checkedMails.includes(mail.id));

  let unReadOption = mails.some(item => item.read);
  let readOption = mails.some(item => !item.read);
  let unImportantOption = mails.some(item => item.important);
  let importantOption = mails.some(item => !item.important);
  let unFavoriteOption = mails.some(item => item.favorite);
  let favoriteOption = mails.some(item => !item.favorite);

  const onShowMoreOptions = event => {
    setShowMoreOptions(event.currentTarget);
  };

  const onHideMoreOptions = () => {
    setShowMoreOptions(null);
  };

  const onClickReadOption = status => {
    dispatch(updateReadStatus(checkedMails, status));
    setCheckedMails([]);
    onHideMoreOptions();
  };

  const onClickFvrtOption = status => {
    dispatch(updateFvrtStatus(checkedMails, status));
    setCheckedMails([]);
    onHideMoreOptions();
  };

  const onClickImprtntOption = status => {
    dispatch(updateImprtntStatus(checkedMails, status));
    setCheckedMails([]);
    onHideMoreOptions();
  };

  return (
    <React.Fragment>
      <Box className={classes.borderLeft} />
      <Box ml={1}>
        <Tooltip title="More Options">
          <IconButton className={classes.iconBtn} onClick={onShowMoreOptions}>
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showMoreOptions} open={Boolean(showMoreOptions)} onClose={onHideMoreOptions}>
        {readOption && <MenuItem onClick={() => onClickReadOption(true)}>Mark as Read</MenuItem>}
        {unReadOption && <MenuItem onClick={() => onClickReadOption(false)}>Mark as Unread</MenuItem>}
        {importantOption && <MenuItem onClick={() => onClickImprtntOption(true)}>Mark as Important</MenuItem>}
        {unImportantOption && <MenuItem onClick={() => onClickImprtntOption(false)}>Remove From Important</MenuItem>}
        {favoriteOption && <MenuItem onClick={() => onClickFvrtOption(true)}>Mark as Favorite</MenuItem>}
        {unFavoriteOption && <MenuItem onClick={() => onClickFvrtOption(false)}>Remove from Favorite</MenuItem>}
      </Menu>
    </React.Fragment>
  );
};

export default MoreOptions;

MoreOptions.prototype = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
  mailsList: PropTypes.array.isRequired,
};
