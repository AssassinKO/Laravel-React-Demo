import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, List, ListItem, Typography } from '@material-ui/core';

const DropzoneWithDisabled = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: true,
  });

  const files = acceptedFiles.map(file => (
    <ListItem key={file.name}>
      {file.name} - {file.size} bytes
    </ListItem>
  ));

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone disabled' })}>
        <input {...getInputProps()} />
        <Typography>Drag 'n' drop some files here, or click to select files</Typography>
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

export default DropzoneWithDisabled;
