import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@material-ui/core';

function InnerDropzone() {
  const { getRootProps } = useDropzone({ noDragEventsBubbling: true });
  return (
    <Box {...getRootProps({ className: 'dropzone' })}>
      <Typography>Inner dropzone</Typography>
    </Box>
  );
}

const OuterDropzone = () => {
  const { getRootProps } = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop: files => console.log(files),
  });

  return (
    <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <InnerDropzone />
        <Typography>Outer dropzone</Typography>
      </Box>
    </Box>
  );
};

export default OuterDropzone;
