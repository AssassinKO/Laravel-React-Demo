import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { Tooltip } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../@coremat/CmtList';
import CmtCardExpendableContent from '../../../../@coremat/CmtCardExpendableContent';

import TaskItem from './TaskItem';
import ToastMessage from './ToastMessage';
import { intranet } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      padding: 0,
    },
  },
  scrollbarRoot: {
    height: 280,
  },
  expendScrollbarRoot: {
    height: 316,
  },
  titleRoot: {
    fontSize: 12,
  },
  selectBoxRoot: {
    '&:before, &:after': {
      display: 'none',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  cardExpendableContent: {
    position: 'relative',
  },
  cardExpendAction: {
    padding: '1px 24px 2px',
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
  },
  cardExpendMainContent: {
    padding: '0 !important',
  },
}));

const { taskCategories, tasksList } = intranet;

const TaskListExpandable = () => {
  const [category, setCategory] = useState(taskCategories[0].slug);
  const [tasks, setTasks] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    if (category) {
      setTasks(tasksList.filter(item => item.category === category));
    }
  }, [category]);

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const getSubTitle = () => {
    return (
      <Select
        className={classes.selectBoxRoot}
        labelId="demo-simple-select-label"
        id="demo-simple"
        value={category}
        onChange={handleCategoryChange}>
        {taskCategories.map((item, index) => (
          <MenuItem key={index} value={item.slug}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    );
  };

  const onAddMore = () => {
    setMessage('You can add your logic of creating a task here.');
    setShowMessage(true);
  };

  const onEditTask = () => {
    setMessage('You can add your logic to edit the task here.');
    setShowMessage(true);
  };

  const updateTask = task => {
    const updatedList = tasks.map(item => (item.id === task.id ? task : item));
    setTasks(updatedList);
  };

  const handleMessageClose = () => () => {
    setShowMessage(false);
  };

  const completedTasks = tasks.filter(item => item.isCompleted);

  return (
    <React.Fragment>
      <CmtCard className={classes.cardRoot}>
        <CmtCardHeader title="Tasks" titleProps={{ className: classes.titleRoot }} subTitle={getSubTitle()}>
          <Tooltip title="Add">
            <IconButton color="primary" onClick={onAddMore}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </CmtCardHeader>
        <Box pb={4}>
          <PerfectScrollbar className={classes.expendScrollbarRoot}>
            <CmtCardContent>
              <CmtList
                data={tasks}
                renderRow={(item, index) => <TaskItem item={item} key={index} updateTask={updateTask} onEdit={onEditTask} />}
              />
            </CmtCardContent>
            <CmtCardExpendableContent
              className={classes.cardExpendableContent}
              actionsComponent={
                <React.Fragment>
                  <Box
                    fontSize={{ xs: 14, lg: 18 }}
                    component="p"
                    color="text.secondary">{`Completed (${completedTasks.length})`}</Box>
                </React.Fragment>
              }
              actionsClasses={{ root: classes.cardExpendAction }}
              contentClass={classes.cardExpendMainContent}>
              <CmtList
                data={completedTasks}
                renderRow={(item, index) => <TaskItem item={item} key={index} updateTask={updateTask} onEdit={onEditTask} />}
              />
            </CmtCardExpendableContent>
          </PerfectScrollbar>
        </Box>
      </CmtCard>
      {showMessage && <ToastMessage open={showMessage} onClose={handleMessageClose()} message={message} />}
    </React.Fragment>
  );
};

export default TaskListExpandable;
