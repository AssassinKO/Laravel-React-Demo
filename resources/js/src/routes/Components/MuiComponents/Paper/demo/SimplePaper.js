import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      backgroundColor: lighten(theme.palette.background.paper, 0.1),
      margin: theme.spacing(2),
      width: theme.spacing(32),
      height: theme.spacing(32),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}
