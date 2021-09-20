import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import AppTextInput from '../../../@jumbo/components/Common/formElements/AppTextInput';
import CmtCard from '../../../@coremat/CmtCard';
import { idGenerator } from '../../../@jumbo/utils/commonHelper';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 5,
    width: 210,
  },
}));

const NewListForm = ({ onCancel, onAdd }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');

  const onListSave = () => {
    if (title) {
      onAdd({ id: idGenerator(), title });
    } else {
      onCancel();
    }
  };

  return (
    <CmtCard className={classes.root}>
      <Box p={4}>
        <Box mb={4}>
          <AppTextInput
            placeholder="Enter list title..."
            fullWidth
            multiline
            value={title}
            onChange={e => setTitle(e.target.value)}
            variant="outlined"
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Button variant="contained" color="primary" size="small" onClick={onListSave}>
            Add List
          </Button>
          <Box ml={1}>
            <IconButton size="small" onClick={onCancel}>
              <Close fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default NewListForm;
