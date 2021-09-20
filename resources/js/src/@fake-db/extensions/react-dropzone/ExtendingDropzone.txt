import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, List, ListItem, Typography } from '@material-ui/core';

const ExtendingDropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    getFilesFromEvent: event => myCustomFileGetter(event),
  });

  const files = acceptedFiles.map(f => (
    <ListItem key={f.name}>
      {f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
    </ListItem>
  ));

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
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

async function myCustomFileGetter(event) {
  const files = [];
  const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

  for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);

    Object.defineProperty(file, 'myProp', {
      value: true,
    });

    files.push(file);
  }

  return files;
}

export default ExtendingDropzone;
