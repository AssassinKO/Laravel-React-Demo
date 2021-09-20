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
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar alt="Remy Sharp" src={'https://via.placeholder.com/150x150'} />
      <Avatar alt="Travis Howard" src={'https://via.placeholder.com/150x150'} />
      <Avatar alt="Cindy Baker" src={'https://via.placeholder.com/150x150'} />
    </Box>
  );
}
