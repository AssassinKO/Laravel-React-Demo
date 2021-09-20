import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@material-ui/core';
import { alpha, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './index.style';

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    pointerEvents: 'auto !important',
    color: theme.palette.common.white,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: 20,
    position: 'relative',
    '& .textColor': {
      color: alpha(theme.palette.common.white, 0.74),
    },
    '& .closeBtn': {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
      '& .MuiSvgIcon-root': {
        fontSize: 16,
      },
    },
    '& .MuiTooltip-arrow': {
      color: theme.palette.primary.main,
    },
  },
}))(Tooltip);

const AddTaskButton = ({ onStartAddTask, openTooltip, setTooltipOpen }) => {
  const classes = useStyles();

  const onAddButtonClick = event => {
    event.stopPropagation();
    setTooltipOpen(false);
    onStartAddTask();
  };

  const onTooltipCLoseButton = event => {
    event.stopPropagation();
    setTooltipOpen(false);
  };

  return (
    <Box py={6} px={8}>
      <Box className={clsx(classes.root, classes.alignCenter)}>
        <HtmlTooltip
          open={openTooltip}
          title={
            <React.Fragment>
              <IconButton className="closeBtn" onClick={onTooltipCLoseButton}>
                <CloseIcon />
              </IconButton>
              <Typography component="h6">Create Task</Typography>
              <Box component="p" className="textColor" mt={2} mb={3}>
                Click here to add your first task or subtask.
              </Box>
              <Box display="flex" alignItems="center">
                <PlayCircleOutlineIcon />
                <Box component="span" ml={3}>
                  How It Works
                </Box>
              </Box>
            </React.Fragment>
          }
          placement="bottom-start"
          arrow>
          <AddIcon className="pointer" onClick={onAddButtonClick} />
        </HtmlTooltip>
        <Box component="span" ml={6} className={clsx(classes.addTaskText, 'pointer')} onClick={onAddButtonClick}>
          Add a Task
        </Box>
      </Box>
    </Box>
  );
};

export default AddTaskButton;
