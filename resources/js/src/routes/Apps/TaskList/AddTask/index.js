import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import SubTasks from './SubTask';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { useDropzone } from 'react-dropzone';
import useStyles from './index.style';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AssignTo from './AssignTo';
import TaskListSelector from '../TaskListSelector';
import Attachments from '../Attachments';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../../../redux/actions/TaskList';
import { getTodayDate } from '../../../../@jumbo/utils/dateHelper';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import AddTaskButton from './AddTaskButton';

const AddTask = ({ isAddTaskView, onStartAddTask }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [subTasks, setSubTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const { taskLists } = useSelector(({ taskList }) => taskList);
  const [selectedTaskList, setSelectedTaskList] = useState(1);
  const [openAssignedTo, setOpenAssignedTo] = useState(false);
  const [openTooltip, setTooltipOpen] = useState(true);

  const [assignedTo, setAssignedTo] = useState(null);
  const [assignFor, setAssignFor] = useState(-1);
  const [attachments, setAttachments] = useState([]);
  const removeSubTask = task => {
    setSubTasks(subTasks.filter(data => data.id !== task.id));
  };

  const onAssignedTo = data => {
    if (assignFor === -1) {
      setAssignedTo(data);
    } else {
      subTasks[assignFor].assigned = data;
      setSubTasks(subTasks);
    }
  };

  const onSubTaskAssign = (data, index) => {
    setAssignFor(index);
    setOpenAssignedTo(true);
  };

  const onAddSubTask = () => {
    setSubTasks(
      subTasks.concat({
        id: new Date().getTime(),
        title: '',
        completed: false,
        assignTo: null,
        collaborators: [],
      }),
    );
  };

  const onAddTask = () => {
    dispatch(
      addTask({
        id: new Date().getTime(),
        title: taskTitle,
        taskList: selectedTaskList,
        assigned: assignedTo,
        subTasks: subTasks,
        isStared: false,
        isCompleted: false,
        attachments: attachments,
        collaborators: [],
        comments: [],
        dueDate: getTodayDate('MMM DD, YYYY'),
      }),
    );

    setSubTasks([]);
    setTaskTitle('');
    setSelectedTaskList(1);
    setOpenAssignedTo(false);
    setAssignedTo(null);
    setAssignFor(-1);
    setAttachments([]);
    onStartAddTask(false);
  };

  const onChangeSubTaskTile = (title, index) => {
    subTasks[index].title = title;
    setSubTasks(subTasks);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setAttachments(
        attachments.concat(
          acceptedFiles.map((file, index) => {
            return {
              id: index + attachments.length,
              name: file.name,
              ...file,
              metaData: { type: file.type, size: file.size },
            };
          }),
        ),
      );
    },
  });

  return isAddTaskView ? (
    <Box py={6} px={8}>
      <Box className={classes.addTaskView}>
        <Box p={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <Box mr={2}>
              <Checkbox color="primary" icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} />
            </Box>
            <AppTextInput
              placeholder="Add a Task"
              value={taskTitle}
              className={classes.textFieldRoot}
              id="standard-basic"
              onChange={e => setTaskTitle(e.target.value)}
            />
          </Box>
          <Box ml={{ sm: 11 }}>
            <SubTasks
              subTasks={subTasks}
              onSubTaskAssign={onSubTaskAssign}
              onAddSubTask={onAddSubTask}
              onChangeSubTaskTile={onChangeSubTaskTile}
              removeSubTask={removeSubTask}
            />
          </Box>
        </Box>
        <Box px={4}>
          <Attachments attachments={attachments} />
        </Box>
        <Box className={classes.addTaskFooter}>
          <Box flex={1} display="flex" alignItems="center">
            <Box ml={-1} mr={3} {...getRootProps()}>
              <input {...getInputProps()} />
              <IconButton>
                <AttachFileIcon />
              </IconButton>
            </Box>

            <Chip
              className={classes.chipRoot}
              onClick={() => {
                setAssignFor(-1);
                setOpenAssignedTo(true);
              }}
              variant="outlined"
              size="medium"
              avatar={<Avatar alt="Natacha" src={assignedTo ? assignedTo.profilePic : 'https://via.placeholder.com/150'} />}
              label={assignedTo ? assignedTo.name : 'Unassigned'}
            />
            <Box className={classes.TaskListSelectorView}>
              <TaskListSelector
                selectedTaskList={selectedTaskList}
                taskLists={taskLists}
                onTaskListSelect={setSelectedTaskList}
              />
            </Box>
          </Box>
          <Box ml="2" display="flex" alignItems="center">
            <Button onClick={onAddTask} variant="contained" color="primary" disabled={!taskTitle}>
              Save
            </Button>

            <Box ml={2}>
              <Button onClick={onStartAddTask} className={classes.btnRoot}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <AssignTo
        assigned={assignedTo}
        onAssignTo={onAssignedTo}
        open={openAssignedTo}
        handleClose={() => setOpenAssignedTo(false)}
      />
    </Box>
  ) : (
    <AddTaskButton onStartAddTask={onStartAddTask} openTooltip={openTooltip} setTooltipOpen={setTooltipOpen} />
  );
};

export default AddTask;
