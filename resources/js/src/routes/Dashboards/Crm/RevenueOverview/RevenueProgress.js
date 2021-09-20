import React from 'react';

import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtList from '../../../../@coremat/CmtList';
import CmtProgressBar from '../../../../@coremat/CmtProgressBar';

import { crm } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  root: {
    '& .Cmt-label-container': {
      fontSize: 12,
      color: theme.palette.text.secondary,
    },
  },
}));

const ProgressIndicator = ({ item }) => (
  <Box width={1} mb={{ xs: 3, sm: 6 }}>
    <CmtProgressBar
      label={<Box mb={-1}>{item.label}</Box>}
      labelPos="top-left"
      value={item.value}
      renderValue={value => {
        return `${value}%`;
      }}
      containedColor={item.color}
      thickness={7}
      onlyContained
    />
  </Box>
);

const RevenueProgress = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CmtList data={crm.revenueList} renderRow={(item, index) => <ProgressIndicator key={index} item={item} />} />
    </div>
  );
};

export default RevenueProgress;
