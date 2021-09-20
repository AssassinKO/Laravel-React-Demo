import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './index.style';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CmtSearch from '../../../@coremat/CmtSearch';
import { setFilterType, toggleExpandSidebar } from '../../../redux/actions/ContactApp';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GridOnIcon from '@material-ui/icons/GridOn';
import ListIcon from '@material-ui/icons/List';
import Hidden from '@material-ui/core/Hidden';

const AppHeader = ({ onChangeViewMode, viewMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filterType } = useSelector(({ contactApp }) => contactApp);
  const { searchText } = filterType;

  const handleSearchText = e => {
    dispatch(
      setFilterType({
        selectedFolder: e.target.value ? '' : 'contacts',
        selectedLabel: '',
        searchText: e.target.value,
      }),
    );
  };

  return (
    <Box className={classes.inBuildAppHeader}>
      <Box className={classes.inBuildAppHeaderSidebar}>
        <Hidden smDown>
          <IconButton onClick={() => dispatch(toggleExpandSidebar())}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography className={classes.inBuildAppHeaderTitle} component="div" variant="h1">
          Contacts
        </Typography>
      </Box>

      <Box className={classes.inBuildAppHeaderContent}>
        <CmtSearch placeholder="Search Contacts..." value={searchText} onChange={handleSearchText} border={false} />
        <Box ml="auto" display="flex" alignItems="center">
          <Box ml={1}>
            <IconButton
              className="icon-btn active"
              color={viewMode === 'table' ? 'primary' : 'default'}
              onClick={() => onChangeViewMode('table')}>
              <ListIcon />
            </IconButton>
          </Box>
          <Box ml={1}>
            <IconButton
              className="icon-btn"
              color={viewMode === 'grid' ? 'primary' : 'default'}
              onClick={() => onChangeViewMode('grid')}>
              <GridOnIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;

AppHeader.prototype = {
  onChangeViewMode: PropTypes.func,
};
