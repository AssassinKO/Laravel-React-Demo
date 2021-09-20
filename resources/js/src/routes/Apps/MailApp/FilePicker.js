import React from 'react';
import { useDropzone } from 'react-dropzone';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const FilePicker = ({ onAddAttachments }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, .pdf, .zip',
    multiple: true,
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file => {
        return {
          id: Math.floor(Math.random() * 10000),
          file,
        };
      });
      onAddAttachments(files);
    },
  });

  return (
    <Box {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <Tooltip title="Attachments">
        <IconButton>
          <AttachFileIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FilePicker;

FilePicker.prototype = {
  onAddAttachments: PropTypes.func,
};
