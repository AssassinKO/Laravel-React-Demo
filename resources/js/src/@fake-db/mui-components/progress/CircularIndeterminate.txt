import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </Box>
  );
}
