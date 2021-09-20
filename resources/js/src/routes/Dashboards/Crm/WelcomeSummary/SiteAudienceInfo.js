import React from 'react';

import { ListItem, Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtList from '../../../../@coremat/CmtList';
import CmtProgressBar from '../../../../@coremat/CmtProgressBar';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  listItemRoot: {
    padding: 0,
    '& .root': {
      marginBottom: 2,
    },
    '& .Cmt-label-container': {
      fontSize: 12,
      color: theme.palette.text.secondary,
    },
  },
}));

const ProgressIndicator = ({ item }) => (
  <Box width={1}>
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

const SiteAudienceInfo = ({ data }) => {
  const classes = useStyles();
  return (
    <CmtList
      data={data}
      renderRow={(item, index) => {
        return (
          <ListItem key={index} component="div" className={classes.listItemRoot}>
            <ProgressIndicator item={item} />
          </ListItem>
        );
      }}
    />
  );
};

export default SiteAudienceInfo;
