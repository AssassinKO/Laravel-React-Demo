import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContactsLabel, updateStarredStatus } from '../../../../../../redux/actions/ContactApp';
import PropTypes from 'prop-types';
import ExportContacts from '../../../ExportContacts';
import PrintIcon from '@material-ui/icons/Print';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const HeaderOptions = ({ checkedContacts, contactsList, labelsList, updateCheckedContacts }) => {
  const dispatch = useDispatch();
  const [showLabels, setShowLabels] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(null);

  const contacts = contactsList.filter(contact => checkedContacts.includes(contact.id));
  let unStarredOption = contacts.some(item => item.starred);
  let starredOption = contacts.some(item => !item.starred);

  const onShowLabels = event => {
    setShowLabels(event.currentTarget);
  };

  const onHideLabels = () => {
    setShowLabels(null);
  };

  const onShowMoreOptions = event => {
    setShowMoreOptions(event.currentTarget);
  };

  const onHideMoreOptions = () => {
    setShowMoreOptions(null);
  };

  const onClickLabelOption = label => {
    dispatch(updateContactsLabel(checkedContacts, label.id));
    updateCheckedContacts([]);
    onHideLabels();
  };

  const onClickStarredOption = status => {
    dispatch(updateStarredStatus(checkedContacts, status));
    updateCheckedContacts([]);
    onHideMoreOptions();
  };

  const onClickDeleteOption = () => {
    dispatch(deleteContact(checkedContacts));
    updateCheckedContacts([]);
  };

  const getDataForExport = () => {
    return contactsList.filter(item => checkedContacts.includes(item.id));
  };

  return (
    <React.Fragment>
      <Box ml={1}>
        <Tooltip title="Print">
          <IconButton size="small" onClick={() => window.print()}>
            <PrintIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box ml={1}>
        <ExportContacts data={getDataForExport()}>
          <Tooltip title="Export">
            <IconButton size="small">
              <CloudUploadIcon />
            </IconButton>
          </Tooltip>
        </ExportContacts>
      </Box>

      <Box ml={1}>
        <Tooltip title="Delete">
          <IconButton size="small" onClick={onClickDeleteOption}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box ml={1}>
        <Tooltip title="Labels">
          <IconButton size="small" onClick={onShowLabels}>
            <LabelIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showLabels} open={Boolean(showLabels)} onClose={onHideLabels}>
        {labelsList.map((item, index) => (
          <MenuItem key={index} onClick={() => onClickLabelOption(item)}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>

      <Box ml={1}>
        <Tooltip title="More Options">
          <IconButton size="small" onClick={onShowMoreOptions}>
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showMoreOptions} open={Boolean(showMoreOptions)} onClose={onHideMoreOptions}>
        {starredOption && <MenuItem onClick={() => onClickStarredOption(true)}>Mark as Starred</MenuItem>}
        {unStarredOption && <MenuItem onClick={() => onClickStarredOption(false)}>Remove from Starred</MenuItem>}
      </Menu>
    </React.Fragment>
  );
};

export default HeaderOptions;

HeaderOptions.prototype = {
  checkedContacts: PropTypes.array.isRequired,
  contactsList: PropTypes.array.isRequired,
  labelsList: PropTypes.array,
  updateCheckedContacts: PropTypes.func,
};

HeaderOptions.defaultProps = {
  labelsList: [],
};
