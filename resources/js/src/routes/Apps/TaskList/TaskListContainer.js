import React, { useContext } from 'react';
import { Box, withWidth } from '@material-ui/core';
import ContentHeader from './ContentHeader';
import useStyles from './index.style';
import TaskListView from './TaskListView';
import { getTaskListContainerHeight } from '../../../@jumbo/constants/AppConstants';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AppContext from '../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';

const TaskListContainer = ({ width }) => {
  const { showFooter } = useContext(AppContext);
  const classes = useStyles({
    height: getTaskListContainerHeight(width, showFooter),
  });
  return (
    <Box className={classes.inBuildAppMainContent}>
      <ContentHeader />
      <PerfectScrollbar className={classes.perfectScrollbarTaskListCon}>
        <TaskListView />
      </PerfectScrollbar>
    </Box>
  );
};

export default withWidth()(TaskListContainer);
