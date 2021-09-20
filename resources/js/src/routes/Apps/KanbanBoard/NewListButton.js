import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const NewListButton = ({ onClick }) => {
  return (
    <Box style={{ marginTop: 5 }}>
      <Button variant="contained" color="primary" onClick={onClick} startIcon={<Add />}>
        Add another list
      </Button>
    </Box>
  );
};

export default NewListButton;
