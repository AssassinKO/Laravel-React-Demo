import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, List, ListItem, Typography } from '@material-ui/core';

const DropzoneWithoutDrag = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noDrag: true,
  });
  const files = acceptedFiles.map(file => <ListItem key={file.path}>{file.path}</ListItem>);

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Typography>Dropzone with no drag events</Typography>
        <em>(Drag 'n' drop is disabled)</em>
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

export default DropzoneWithoutDrag;
