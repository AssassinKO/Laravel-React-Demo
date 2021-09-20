import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
}));

export default function SizeAvatars() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar alt="Remy Sharp" src={'https://via.placeholder.com/150x150'} className={classes.small} />
      <Avatar alt="Remy Sharp" src={'https://via.placeholder.com/150x150'} />
      <Avatar alt="Remy Sharp" src={'https://via.placeholder.com/150x150'} className={classes.large} />
    </Box>
  );
}
