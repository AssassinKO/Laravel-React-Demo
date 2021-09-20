import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import AttachmentCell from './AttachmentCell';

const Attachments = ({ attachments }) => {
  const [size, setSize] = useState(2);
  return (
    <Box display="flex" alignItems="center" flexWrap="wrap" mb={5}>
      {attachments.slice(0, size).map(attachment => (
        <AttachmentCell key={attachment.id} attachment={attachment} />
      ))}
      {attachments.length > size ? (
        <Box component="span" color="text.disabled" className="pointer" mb={2} onClick={() => setSize(attachments.length)}>
          +{attachments.length - size} More
        </Box>
      ) : null}
    </Box>
  );
};

export default Attachments;
