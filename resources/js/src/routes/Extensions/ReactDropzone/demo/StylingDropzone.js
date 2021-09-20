import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@material-ui/core';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const StylingDropzone = () => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ accept: 'image/*' });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  return (
    <div>
      <Box {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Typography>Drag 'n' drop some files here, or click to select files</Typography>
      </Box>
    </div>
  );
};

export default StylingDropzone;
