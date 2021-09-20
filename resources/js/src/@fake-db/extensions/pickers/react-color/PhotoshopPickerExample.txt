import React from 'react';
import { PhotoshopPicker } from 'react-color';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      '& > .photoshop-picker': {
        width: '100% !important',
      },
    },
  },
}));

const PhotoshopPickerExample = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <PhotoshopPicker style={{ width: '100%' }} />
    </Box>
  );
};

export default PhotoshopPickerExample;
