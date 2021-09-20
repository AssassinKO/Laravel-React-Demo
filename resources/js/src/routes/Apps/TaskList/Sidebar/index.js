import React, { useContext, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import useStyles from '../index.style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useDispatch, useSelector } from 'react-redux';

import { getTaskList, getTasksCounts, setFilterData } from '../../../../redux/actions/TaskList';
import CmtList from '../../../../@coremat/CmtList';
import SidebarHeader from './SidebarHeader';
import TaskListCell from './TaskListCell';
import TaskFilterCell from './TaskFilterCell';
import AddTaskList from './AddTaskList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getTaskListSidebarHeight } from '../../../../@jumbo/constants/AppConstants';
import { withWidth } from '@material-ui/core';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';

const Sidebar = ({ width }) => {
  const { showFooter } = useContext(AppContext);
  const { taskLists, filterData, isSideBarCollapsed, counter, tasks } = useSelector(({ taskList }) => taskList);
  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState(filterData.filterType ? filterData.filterType : 0);
  const [taskList, setTaskList] = useState(filterData.taskList ? filterData.taskList : 0);

  useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilterData({ filterType, taskList }));
  }, [dispatch, filterType, taskList]);

  useEffect(() => {
    dispatch(getTasksCounts());
  }, [dispatch, filterType, taskList, tasks]);

  const onTaskFilterChange = value => {
    setFilterType(value);
    setTaskList(null);
  };
  const onTaskListChange = value => {
    setTaskList(value);
    setFilterType(null);
  };

  const classes = useStyles({
    isCollapsed: isSideBarCollapsed,
    height: getTaskListSidebarHeight(width, showFooter),
  });

  return (
    <Box className={classes.inBuildAppSidebar}>
      <SidebarHeader />
      <PerfectScrollbar className={classes.perfectScrollbarTaskListSidebar}>
        <List component="nav" className={classes.appNav}>
          <TaskFilterCell
            key={1}
            id={1}
            title="Assigned to me"
            classes={classes}
            filterType={filterType}
            onTaskFilterChange={onTaskFilterChange}
            icon={<PersonIcon />}
            count={counter ? counter.myTasks : 0}
          />
          <TaskFilterCell
            key={2}
            id={2}
            title="All Tasks"
            classes={classes}
            filterType={filterType}
            onTaskFilterChange={onTaskFilterChange}
            icon={<FormatListBulletedIcon />}
            count={counter ? counter.all : 0}
          />
          <TaskFilterCell
            key={3}
            id={3}
            title="Important"
            classes={classes}
            filterType={filterType}
            onTaskFilterChange={onTaskFilterChange}
            icon={<StarBorderIcon />}
            count={counter ? counter.important : 0}
          />

          <ListItem component="div" key={5} className={classes.appNavHeaderItem}>
            Task List
          </ListItem>

          <CmtList
            data={taskLists}
            renderRow={(item, index) => (
              <TaskListCell
                key={index}
                taskList={taskList}
                item={item}
                count={counter ? counter.lists[item.id] : 0}
                classes={classes}
                onTaskListChange={onTaskListChange}
              />
            )}
          />
          <AddTaskList />
        </List>
      </PerfectScrollbar>
    </Box>
  );
};

export default withWidth()(Sidebar);
