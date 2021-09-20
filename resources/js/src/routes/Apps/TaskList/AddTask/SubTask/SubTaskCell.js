import React from 'react';
import { Box, Checkbox, Tooltip } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import AppTextInput from '../../../../../@jumbo/components/Common/formElements/AppTextInput';

const useStyles = makeStyles(theme => ({
  subTaskCelItem: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: alpha(theme.palette.common.dark, 0.05),
    borderRadius: 4,
    marginBottom: 1,
    marginTop: 1,
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  },
  textFieldRoot: {
    marginLeft: 6,
    width: '100%',
    '& .MuiInput-underline': {
      '&:before': {
        display: 'none',
      },
    },
  },
  imgRoot: {
    borderRadius: '50%',
    display: 'block',
  },
}));

const SubTaskCell = ({ data, index, onChange, removeSubTask, onSubTaskAssign }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.subTaskCelItem, 'subtask-cellitem')}>
      <Box flex={1} display="flex" alignItems="center">
        <Checkbox color="primary" icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} />
        <AppTextInput
          id="standard-basic"
          className={classes.textFieldRoot}
          placeholder="Add a SubTask"
          defaultValue={data.title}
          onChange={e => onChange(e.target.value, index)}
        />
      </Box>
      <Box ml={2} display="flex" alignItems="center">
        {data.assigned ? (
          <Box mr={2}>
            <Tooltip title={data.assigned.name}>
              <CmtAvatar
                onClick={() => onSubTaskAssign(data, index)}
                className={classes.imgRoot}
                src={data.assigned.profilePic}
                size={35}
                alt={data.assigned.name}
              />
            </Tooltip>
          </Box>
        ) : (
          <IconButton onClick={() => onSubTaskAssign(data, index)}>
            <PersonAddIcon />
          </IconButton>
        )}
        <IconButton onClick={() => removeSubTask(data)}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SubTaskCell;
