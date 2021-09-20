import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(4),
    },
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LinearProgress />
      <LinearProgress color="secondary" />
    </Box>
  );
}
