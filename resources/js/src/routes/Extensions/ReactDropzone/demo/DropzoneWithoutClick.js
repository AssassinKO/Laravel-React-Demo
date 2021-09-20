import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, List, ListItem, Typography } from '@material-ui/core';

const DropzoneWithoutClick = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
  });
  const files = acceptedFiles.map(file => <ListItem key={file.path}>{file.path}</ListItem>);

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Typography>Dropzone without click events</Typography>
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

export default DropzoneWithoutClick;
