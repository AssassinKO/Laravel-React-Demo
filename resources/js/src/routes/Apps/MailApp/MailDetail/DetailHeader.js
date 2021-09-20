import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import HeaderOptions from './HeaderOptions';
import { onNullifyMail, onUpdateMail } from '../../../../redux/actions/MailApp';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const DetailHeader = ({ classes, selectedMail, labelsList }) => {
  const dispatch = useDispatch();
  const [showMoreOptions, setShowMoreOptions] = useState(null);

  const onShowMoreOptions = event => {
    setShowMoreOptions(event.currentTarget);
  };

  const onHideMoreOptions = () => {
    setShowMoreOptions(null);
  };

  const onGoBack = () => {
    dispatch(onNullifyMail());
  };

  const onChangeMailFolder = folder => {
    const mail = { ...selectedMail, folder };
    dispatch(onUpdateMail(mail));
  };

  const onSelectLabel = label => {
    const mail = { ...selectedMail };
    const isLabel = mail.labels.some(item => item === label);
    if (isLabel) {
      mail.labels = mail.labels.filter(item => item !== label);
    } else {
      mail.labels = mail.labels.concat(label);
    }
    dispatch(onUpdateMail(mail));
  };

  const onUpdateFvrtStatus = () => {
    const mail = { ...selectedMail, favorite: !selectedMail.favorite };
    dispatch(onUpdateMail(mail));
    onHideMoreOptions();
  };

  const onUpdateImprtntStatus = () => {
    const mail = { ...selectedMail, important: !selectedMail.important };
    dispatch(onUpdateMail(mail));
    onHideMoreOptions();
  };

  return (
    <Box className={classes.appContentHeader}>
      <Tooltip title="Back">
        <IconButton onClick={onGoBack}>
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
      <Box ml="auto" display="flex" alignItems="center">
        <HeaderOptions
          onChangeMailFolder={onChangeMailFolder}
          onSelectLabel={onSelectLabel}
          labelsList={labelsList}
          selectedMail={selectedMail}
        />
      </Box>

      <Box className={classes.borderLeft} />
      <Box ml={1}>
        <Tooltip title="More Options">
          <IconButton onClick={onShowMoreOptions}>
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu anchorEl={showMoreOptions} open={Boolean(showMoreOptions)} onClose={onHideMoreOptions}>
        <MenuItem onClick={onUpdateFvrtStatus}>
          {selectedMail.favorite ? 'Remove from Favorite' : 'Mark as Favorite'}
        </MenuItem>
        <MenuItem onClick={onUpdateImprtntStatus}>
          {selectedMail.important ? 'Remove from Important' : 'Mark as Important'}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default DetailHeader;

DetailHeader.prototype = {
  selectedMail: PropTypes.object.isRequired,
  labelsList: PropTypes.array.isRequired,
};
