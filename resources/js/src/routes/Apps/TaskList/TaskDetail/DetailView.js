import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Attachments from '../Attachments';
import Typography from '@material-ui/core/Typography';
import SubTask from '../AddTask/SubTask';
import Collaborators from '../Collaborators';
import CommentView from '../CommentView';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { onTaskSelect, updateTask } from '../../../../redux/actions/TaskList';
import AssignTo from '../AddTask/AssignTo';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Checkbox from '@material-ui/core/Checkbox';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const useStyles = makeStyles(theme => ({
  titleView: {
    marginBottom: 20,
  },
  textFieldRoot: {
    width: '100%',
    '& .MuiInput-underline': {
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiInputBase-root': {
      fontSize: 18,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.up('lg')]: {
        fontSize: 20,
      },
    },
  },
  badgeRoot: {
    fontSize: 14,
    letterSpacing: 0.5,
    borderRadius: 4,
    padding: '4px 12px',
    marginRight: 5,
  },
  starIconRoot: {
    color: theme.palette.warning.main,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 12,
    },
  },
  subTaskTitle: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
    marginBottom: 12,
  },
  subTaskRoot: {
    '& .add-subtask': {
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
      color: theme.palette.text.secondary,
    },
    '& .subtask-cellitem': {
      backgroundColor: 'transparent',
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
      marginBottom: 0,
      borderRadius: 0,
    },
  },
}));

const DetailView = ({ showingComments, setShowingComments }) => {
  const classes = useStyles();
  const { currentTask, taskLists } = useSelector(({ taskList }) => taskList);
  const [title, setTitle] = useState(currentTask ? currentTask.title : '');
  const [subTasksNo, setSubTasksNo] = useState(2);
  const [assignedTo, setAssignedTo] = useState(null);
  const [openAssignedTo, setOpenAssignedTo] = useState(false);
  const [assignFor, setAssignFor] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(currentTask ? currentTask.title : '');
  }, [currentTask]);

  const onTaskTitleChange = event => {
    setTitle(event.target.value);
  };

  const onTaskTitleBlur = event => {
    dispatch(updateTask({ ...currentTask, title: event.target.value }));
  };

  const onChangeSubTaskTile = (value, index) => {
    currentTask.subTasks[index].title = value;
    dispatch(onTaskSelect(currentTask));
    dispatch(updateTask(currentTask));
  };

  const onSubTaskAssign = (data, index) => {
    setAssignFor(index);
    setAssignedTo(data.assigned);
    setOpenAssignedTo(true);
  };

  const updateCollaborators = data => {
    currentTask.collaborators = data;
    dispatch(updateTask(currentTask));
    dispatch(onTaskSelect(currentTask));
  };

  const onAssignedTo = data => {
    if (assignFor === -1) {
      currentTask.assigned = data;
    } else {
      currentTask.subTasks[assignFor].assigned = data;
    }

    dispatch(updateTask(currentTask));
    dispatch(onTaskSelect(currentTask));
  };

  const onAddSubTask = () => {
    currentTask.subTasks = currentTask.subTasks.concat({
      id: new Date().getTime(),
      subTaskTitle: '',
      completed: false,
      assignTo: null,
      collaborators: [],
    });
    dispatch(onTaskSelect(currentTask));
  };

  const removeSubTask = item => {
    currentTask.subTasks = currentTask.subTasks.filter(data => data.id !== item.id);
    dispatch(onTaskSelect(currentTask));
  };

  const onClickStarredIcon = e => {
    dispatch(updateTask({ ...currentTask, isStared: e.target.checked }));
    dispatch(onTaskSelect({ ...currentTask, isStared: e.target.checked }));
  };

  const assignedTaskList = taskLists.find(item => item.id === currentTask.taskList);
  return (
    <Box display="flex" flexDirection="column">
      <Box px={6} pb={6} pt={1}>
        <Box
          display="flex"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          mb={3}>
          {assignedTaskList && (
            <Box
              component="span"
              className={classes.badgeRoot}
              style={{
                backgroundColor: alpha(assignedTaskList.color, 0.1),
                color: assignedTaskList.color,
              }}>
              {assignedTaskList.name}
            </Box>
          )}
          <Box ml={{ sm: 'auto' }} display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              className="pointer"
              onClick={() => {
                setAssignedTo(currentTask.assigned);
                setAssignFor(-1);
                setOpenAssignedTo(true);
              }}>
              <CmtAvatar
                className={classes.imgRoot}
                src={currentTask.assigned ? currentTask.assigned.profilePic : null}
                size={30}
                alt={currentTask.assigned ? currentTask.assigned.name : 'Unassigned'}
              />
              <Box mx={2}>{currentTask.assigned ? currentTask.assigned.name : 'Unassigned'}</Box>
            </Box>

            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon style={{ color: '#FF8C00' }} />}
              checked={currentTask.isStared}
              onChange={onClickStarredIcon}
              size="small"
            />
          </Box>
        </Box>

        <Box className={classes.titleView}>
          <AppTextInput
            value={title}
            className={classes.textFieldRoot}
            id="standard-basic"
            multiline
            rowsMax={4}
            label=""
            onChange={onTaskTitleChange}
            onBlur={onTaskTitleBlur}
          />
        </Box>
        <Attachments attachments={currentTask.attachments} />
        <Typography component="div" variant="h6" className={classes.subTaskTitle}>
          Subtask
        </Typography>
        <Box className={classes.subTaskRoot}>
          <SubTask
            subTasks={currentTask.subTasks.slice(0, subTasksNo)}
            onSubTaskAssign={onSubTaskAssign}
            onChangeSubTaskTile={onChangeSubTaskTile}
            onAddSubTask={onAddSubTask}
            removeSubTask={removeSubTask}
          />
          {currentTask.subTasks.length - subTasksNo > 0 ? (
            <Box
              className="pointer"
              color="primary.main"
              component="span"
              fontSize={16}
              my={3}
              display="inline-block"
              onClick={() => setSubTasksNo(currentTask.subTasks.length)}>
              +{currentTask.subTasks.length - subTasksNo} More
            </Box>
          ) : null}
        </Box>
      </Box>
      <AssignTo
        assigned={assignedTo}
        onAssignTo={onAssignedTo}
        open={openAssignedTo}
        handleClose={() => setOpenAssignedTo(false)}
      />

      <Collaborators collaborators={currentTask.collaborators} updateCollaborators={updateCollaborators} />
      <CommentView currentTask={currentTask} showingComments={showingComments} setShowingComments={setShowingComments} />
    </Box>
  );
};

export default DetailView;
