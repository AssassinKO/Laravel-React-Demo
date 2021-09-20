import React from 'react';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import LabelIcon from '@material-ui/icons/Label';
import PropTypes from 'prop-types';

const ItemCell = ({ classes, item, selectedItem, onChange }) => {
  const { counter } = useSelector(({ contactApp }) => contactApp);
  return (
    <ListItem
      button
      className={clsx(classes.appNavItem, {
        active: item.slug === selectedItem,
      })}
      onClick={() => onChange(item.slug)}>
      <ListItemIcon className="Cmt-icon-root">
        {item.icon ? item.icon : <LabelIcon style={{ color: item.color }} />}
      </ListItemIcon>
      <ListItemText className="Cmt-nav-text" primary={item.name} />
      {counter && counter[item.slug] !== 0 && (
        <Box component="span" className="Cmt-nav-count">
          {counter.folders[item.id]}
        </Box>
      )}
    </ListItem>
  );
};

export default ItemCell;

ItemCell.prototype = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  selectedItem: PropTypes.string,
};

ItemCell.defaultProps = {
  selectedItem: '',
};
