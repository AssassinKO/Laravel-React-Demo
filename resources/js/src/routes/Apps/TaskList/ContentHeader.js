import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import useStyles from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { setFilterData, toggleExpandSidebar } from '../../../redux/actions/TaskList';
import CmtSearch from '../../../@coremat/CmtSearch';

const ContentHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { taskLists, filterData } = useSelector(({ taskList }) => taskList);
  useEffect(() => {
    dispatch(setFilterData({ search }));
  }, [dispatch, search]);

  const onSearchTask = e => {
    setSearch(e.target.value);
  };

  const getFilterType = e => {
    if (filterData.taskList && filterData.taskList > 0) {
      const selectedTaskList = taskLists.find(data => data.id === filterData.taskList);
      return selectedTaskList.name;
    } else if (filterData.filterType && filterData.filterType > 0) {
      switch (filterData.filterType) {
        case 1: {
          return 'My Tasks';
        }
        case 3: {
          return 'Important';
        }
        default: {
          return 'All Tasks';
        }
      }
    }
  };

  return (
    <Box className={classes.appContentHeader}>
      <IconButton className="icon-btn" onClick={() => dispatch(toggleExpandSidebar())}>
        <MenuIcon />
      </IconButton>
      <Box pl={3} className={classes.taskListSelectorRoot}>
        {getFilterType()}
      </Box>
      <Box ml="auto" display="flex" alignItems="center">
        <Box className={classes.searchAction}>
          <Box className={classes.searchActionBar}>
            <CmtSearch onlyIcon onChange={onSearchTask} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentHeader;
