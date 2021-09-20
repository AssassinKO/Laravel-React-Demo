import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './AddTaskList.style';
import { addTaskList } from '../../../../redux/actions/TaskList';
import LabelForm from '../../../../@jumbo/components/Common/LabelForm';

const AddTaskList = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box className={classes.appNavItem} onClick={handleClick}>
        <Box className="Cmt-icon-root">
          <AddIcon />
        </Box>
        <Box component="span" className="Cmt-nav-text">
          Create Task list
        </Box>
      </Box>

      <LabelForm title="Task List" anchorEl={anchorEl} onClose={handleClose} saveLabel={addTaskList} />
    </React.Fragment>
  );
};

export default AddTaskList;
