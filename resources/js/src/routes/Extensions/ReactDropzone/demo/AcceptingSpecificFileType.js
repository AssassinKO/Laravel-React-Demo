import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, List, ListItem, Typography } from '@material-ui/core';

const AcceptingSpecificFileType = () => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <ListItem key={file.path}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <ListItem key={file.path}>
      {file.path} - {file.size} bytes
      <List>
        {errors.map(e => (
          <ListItem key={e.code}>{e.message}</ListItem>
        ))}
      </List>
    </ListItem>
  ));

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Typography>Drag 'n' drop some files here, or click to select files</Typography>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </Box>
      <aside>
        <Typography component="h4" variant="inherit">
          Accepted files
        </Typography>
        <List>{acceptedFileItems}</List>
        <Typography component="h4" variant="inherit">
          Rejected files
        </Typography>
        <List>{fileRejectionItems}</List>
      </aside>
    </Box>
  );
};

export default AcceptingSpecificFileType;
