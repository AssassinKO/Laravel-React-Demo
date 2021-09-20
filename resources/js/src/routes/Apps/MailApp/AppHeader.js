import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import CmtSearch from '../../../@coremat/CmtSearch';
import { setFilterType, toggleExpandSidebar } from '../../../redux/actions/MailApp';
import Popover from '@material-ui/core/Popover';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Hidden from '@material-ui/core/Hidden';

const AppHeader = ({ viewMode, handleViewModeChange }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filterType } = useSelector(({ mailApp }) => mailApp);
  const { searchText } = filterType;
  const [showViewModes, setShowViewModes] = useState(null);

  const onShowViewModes = event => {
    setShowViewModes(event.currentTarget);
  };

  const onHideViewModes = () => {
    setShowViewModes(null);
  };

  const handleSearchText = e => {
    dispatch(
      setFilterType({
        selectedFolder: !e.target.value && 'inbox',
        selectedFilter: '',
        selectedLabel: '',
        searchText: e.target.value,
        page: 0,
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
          Messages
        </Typography>
      </Box>

      <Box className={classes.inBuildAppHeaderContent}>
        <CmtSearch placeholder="Search Emails..." value={searchText} onChange={handleSearchText} border={false} />
        <Box ml="auto" display="flex" alignItems="center">
          <IconButton onClick={onShowViewModes}>
            <SettingsIcon />
          </IconButton>
          <Popover
            id="Mode-id"
            open={Boolean(showViewModes)}
            anchorEl={showViewModes}
            onClose={onHideViewModes}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            <RadioGroup
              className={classes.radioGroupRoot}
              aria-label="gender"
              name="gender1"
              value={viewMode}
              onChange={e => handleViewModeChange(e.target.value)}>
              <FormControlLabel
                className={classes.formControlLable}
                value="compact"
                control={<Radio />}
                label="Compact Mode"
              />
              <FormControlLabel
                className={classes.formControlLable}
                value="detail"
                control={<Radio />}
                label="Detail Mode"
              />
            </RadioGroup>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;
