import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import LabelIcon from '@material-ui/icons/Label';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { deleteLabel } from '../../../../redux/actions/ContactApp';
import LabelForm from '../../../../@jumbo/components/Common/LabelForm';
import { updateLabel } from '../../../../redux/actions/ContactApp';

const LabelCell = ({ classes, item, selectedItem, onChange }) => {
  const [isEdit, setEdit] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { counter } = useSelector(({ contactApp }) => contactApp);
  const dispatch = useDispatch();
  const [anchorEditEl, setAnchorEditEl] = useState(null);
  const labelRef = useRef(null);

  const handleMenuClick = event => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = e => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const onClickEditLabel = event => {
    setEdit(true);
    handleMenuClose(event);
    setAnchorEditEl(labelRef.current);
  };

  const handleEditClose = () => {
    setAnchorEditEl(null);
  };

  const onClickDeleteLabel = e => {
    dispatch(deleteLabel(item.id));
    handleMenuClose(e);
  };

  return (
    <React.Fragment>
      <ListItem
        ref={labelRef}
        button
        className={clsx(classes.appNavItem, classes.appTaskNavItem, {
          active: item.slug === selectedItem,
        })}
        onClick={() => onChange(item.id)}>
        <ListItemIcon className="Cmt-icon-root">
          {item.icon ? item.icon : <LabelIcon style={{ color: item.color }} />}
        </ListItemIcon>
        <ListItemText className="Cmt-nav-text" primary={item.name} />
        {counter && counter.labels[item.id] > 0 && (
          <Box component="span" className="Cmt-nav-count">
            {counter.labels[item.id]}
          </Box>
        )}
        <Box className="Cmt-more-vert-icon">
          <MoreVertIcon onClick={handleMenuClick} />
        </Box>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={onClickEditLabel}>Edit</MenuItem>
          <MenuItem onClick={onClickDeleteLabel}>Delete</MenuItem>
        </Menu>
      </ListItem>

      {isEdit && (
        <LabelForm
          anchorEl={anchorEditEl}
          onClose={handleEditClose}
          label={item}
          setEdit={setEdit}
          saveLabel={updateLabel}
        />
      )}
    </React.Fragment>
  );
};

export default LabelCell;

LabelCell.prototype = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  selectedItem: PropTypes.string,
};

LabelCell.defaultProps = {
  selectedItem: '',
};
