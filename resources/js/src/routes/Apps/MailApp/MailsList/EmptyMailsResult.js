import React from 'react';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';

const EmptyMailsResult = () => {
  return (
    <Box>
      <CmtImage src={'/images/icons/empty-mails.png'} alt="Empty Mails" />
      <Box fontSize={16} color="text.disabled" component="p">
        You do not have any new emails
      </Box>
    </Box>
  );
};

export default EmptyMailsResult;
