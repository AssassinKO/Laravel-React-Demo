import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="primary" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" color="default" startIcon={<CloudUploadIcon />}>
        Upload
      </Button>
      <Button variant="contained" disabled color="secondary" startIcon={<KeyboardVoiceIcon />}>
        Talk
      </Button>
      <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
        Save
      </Button>
    </Box>
  );
}
