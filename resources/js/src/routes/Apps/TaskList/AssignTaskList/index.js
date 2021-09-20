import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CmtList from '../../../../@coremat/CmtList';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { onTaskSelect, updateTask } from '../../../../redux/actions/TaskList';
import AppRadioButton from '../../../../@jumbo/components/Common/formElements/AppRadioButton';

const useStyles = makeStyles(theme => ({
  dialogRoot: {
    '& .MuiDialog-paperWidthSm': {
      width: 340,
      [theme.breakpoints.up('sm')]: {
        width: 440,
      },
    },
  },
  titleRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    paddingBottom: 16,
  },
  listItemRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  dialogActionsRoot: {
    paddingLeft: 24,
    paddingRight: 24,
  },
}));

const AssignTaskList = ({ handleClose, open, currentTask }) => {
  const classes = useStyles();
  const [taskList, setTaskList] = useState(currentTask.taskList);
  const { taskLists } = useSelector(({ taskList }) => taskList);
  const dispatch = useDispatch();

  const assignTaskList = () => {
    dispatch(updateTask({ ...currentTask, taskList }));
    dispatch(onTaskSelect({ ...currentTask, taskList }));
    handleClose();
  };

  return (
    <Dialog className={classes.dialogRoot} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        <Typography className={classes.titleRoot} component="div" variant="body1">
          Assign Task List
        </Typography>
      </DialogTitle>
      <CmtList
        data={taskLists}
        renderRow={(item, index) => (
          <Box component="div" className={classes.listItemRoot} key={index} px={6}>
            <AppRadioButton label={item.name} checked={taskList === item.id} onChange={() => setTaskList(item.id)} />
            {/*<Typography component="div" variant="h4" className={classes.listItemTitleRoot}>
              {item.name}
            </Typography>*/}
          </Box>
        )}
      />

      <DialogActions className={classes.dialogActionsRoot}>
        <Button onClick={handleClose} className={classes.btnDisablColor}>
          Cancel
        </Button>
        <Button onClick={assignTaskList} color="primary">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignTaskList;
