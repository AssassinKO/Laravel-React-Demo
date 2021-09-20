import React from 'react';
import Box from '@material-ui/core/Box';
import CmtProgressBar from '../../../../@coremat/CmtProgressBar';

const ProgressIndicator = ({ item, ...rest }) => {
  return (
    <Box width={1} {...rest}>
      <CmtProgressBar
        label={
          <Box display="flex" alignItems="center">
            {`${item.label}`} | <Box pl={1} component="span" color="text.secondary" fontSize={12}>{`${item.rate}`}</Box>
          </Box>
        }
        labelPos="top-left"
        value={item.value}
        renderValue={value => {
          return `${value}%`;
        }}
        containedColor={item.color}
        onlyContained
      />
    </Box>
  );
};

export default ProgressIndicator;
