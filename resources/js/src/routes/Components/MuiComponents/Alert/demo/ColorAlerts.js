import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(4),
    },
  },
}));

export default function ColorAlerts() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Alert severity="success" color="info">
        This is a success alert — check it out!
      </Alert>
    </Box>
  );
}
