import React, { createRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClickAwayListener, IconButton, Typography } from '@material-ui/core';
import CmtDropdownMenu from '../../../@coremat/CmtDropdownMenu';
import { Delete, Edit, MoreVert } from '@material-ui/icons';
import AppTextInput from '../../../@jumbo/components/Common/formElements/AppTextInput';
import DeleteConfirmation from './components/DeleteConfirmation';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
  },
  inputBoxWrapper: {
    flex: 1,
  },
  inputBox: {
    backgroundColor: theme.palette.background.paper,
    '& .MuiOutlinedInput-input': {
      padding: '5px 5px',
    },
  },
  listTitle: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
    flex: 1,
    padding: '5px 5px',
  },
  menuHandle: {
    marginLeft: 4,
  },
}));

const menus = [
  { action: 'edit', label: 'Edit', icon: <Edit fontSize="small" /> },
  { action: 'delete', label: 'Delete', icon: <Delete fontSize="small" /> },
];

const ListHeader = ({ updateTitle, canAddLanes, onDelete, label, title, titleStyle, labelStyle, laneDraggable }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const headerRef = createRef();

  const onMenuItemClick = item => {
    switch (item.action) {
      case 'edit':
        setEdit(true);
        break;

      case 'delete':
        handleClick();
        break;

      default:
        break;
    }
  };

  const handleClick = () => {
    setAnchorEl(headerRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} ref={headerRef}>
      {edit ? (
        <ClickAwayListener onClickAway={() => setEdit(false)}>
          <div className={classes.inputBoxWrapper}>
            <AppTextInput
              className={classes.inputBox}
              placeholder="Enter a title..."
              variant="outlined"
              fullWidth
              value={title}
              onChange={e => updateTitle(e.target.value)}
            />
          </div>
        </ClickAwayListener>
      ) : (
        <Typography
          className={classes.listTitle}
          draggable={laneDraggable}
          variant="h3"
          component="h3"
          onClick={() => setEdit(true)}
          style={titleStyle}>
          {title}
        </Typography>
      )}

      {label && <span style={labelStyle}>{label}</span>}

      {canAddLanes && (
        <CmtDropdownMenu
          items={menus}
          onItemClick={onMenuItemClick}
          TriggerComponent={
            <IconButton size="small" className={classes.menuHandle}>
              <MoreVert />
            </IconButton>
          }
        />
      )}

      <DeleteConfirmation anchorEl={anchorEl} onClose={handleClose} onConfirm={onDelete} />
    </div>
  );
};

export default ListHeader;
