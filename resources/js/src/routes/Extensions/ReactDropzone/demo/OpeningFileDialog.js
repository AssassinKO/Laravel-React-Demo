import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, List, ListItem, Typography } from '@material-ui/core';

const OpeningFileDialog = () => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map(file => (
    <ListItem key={file.path}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Typography>Drag 'n' drop some files here</Typography>
        <Button variant="outlined" type="button" onClick={open}>
          Open File Dialog
        </Button>
      </Box>
      <aside>
        <Typography component="h4" variant="inherit">
          Files
        </Typography>
        <List>{files}</List>
      </aside>
    </Box>
  );
};

export default OpeningFileDialog;
