import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const AddCardButton = ({ onClick }) => {
  return (
    <Box mt={2}>
      <Button color="primary" onClick={onClick} startIcon={<Add />}>
        Add a card
      </Button>
    </Box>
  );
};

export default AddCardButton;
