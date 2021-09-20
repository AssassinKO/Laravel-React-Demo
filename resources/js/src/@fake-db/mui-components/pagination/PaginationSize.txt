import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(4),
    },
  },
}));

export default function PaginationSize() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Box>
  );
}
