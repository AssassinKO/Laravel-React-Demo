import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { folderList } from '../../../../../@fake-db/apps/mail';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import FolderIcon from '@material-ui/icons/Folder';
import ReportIcon from '@material-ui/icons/Report';
import Hidden from '@material-ui/core/Hidden';

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
  menuItemsRoot: {
    fontSize: 16,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '& .MuiSvgIcon-root': {
      display: 'block',
      fontSize: 20,
    },
  },
}));

const HeaderOptions = ({ onChangeMailFolder, onSelectLabel, labelsList }) => {
  const [showLabels, setShowLabels] = useState(null);
  const [showFolders, setShowFolders] = useState(null);
  const classes = useStyles();

  const onShowLabels = event => {
    setShowLabels(event.currentTarget);
  };

  const onHideLabels = () => {
    setShowLabels(null);
  };

  const onShowFolders = event => {
    setShowFolders(event.currentTarget);
  };

  const onHideFolders = () => {
    setShowFolders(null);
  };

  const onClickLabelOption = label => {
    onSelectLabel(label.id);
    onHideLabels();
  };

  const onClickFolderOption = folder => {
    onChangeMailFolder(folder.slug);
    onHideFolders();
  };

  return (
    <React.Fragment>
      <Hidden xsDown>
        <Box ml={1}>
          <Tooltip title="Report Spam">
            <IconButton onClick={() => onChangeMailFolder('spam')}>
              <ReportIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box ml={1}>
          <Tooltip title="Archive">
            <IconButton onClick={() => onChangeMailFolder('archived')}>
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box ml={1}>
          <Tooltip title="Delete">
            <IconButton onClick={() => onChangeMailFolder('trash')}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box className={classes.borderLeft} />
      </Hidden>

      <Box ml={1}>
        <Tooltip title="Labels">
          <IconButton className={classes.iconBtn} onClick={onShowLabels}>
            <LabelIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showLabels} open={Boolean(showLabels)} onClose={onHideLabels}>
        {labelsList.map((item, index) => (
          <MenuItem key={index} className={classes.menuItemsRoot} value={item.id} onClick={() => onClickLabelOption(item)}>
            <Box display="flex" alignItems="center" width={1}>
              <Box>
                <LabelIcon style={{ color: item.color }} />
              </Box>
              <Box ml={4} component="span">
                {item.name}
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      <Box ml={1}>
        <Tooltip title="Move to">
          <IconButton className={classes.iconBtn} onClick={onShowFolders}>
            <FolderIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showFolders} open={Boolean(showFolders)} onClose={onHideFolders}>
        {folderList.map((item, index) => (
          <MenuItem key={index} className={classes.menuItemsRoot} value={item.id} onClick={() => onClickFolderOption(item)}>
            <Box display="flex" alignItems="center" width={1}>
              <Box>{item.icon}</Box>
              <Box ml={4} component="span">
                {item.name}
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default HeaderOptions;

HeaderOptions.prototype = {
  onChangeMailFolder: PropTypes.func,
  onSelectLabel: PropTypes.func,
  labelsList: PropTypes.array.isRequired,
};
