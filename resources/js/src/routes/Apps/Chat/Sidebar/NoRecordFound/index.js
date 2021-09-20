import React from 'react';
import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtImage from '../../../../../@coremat/CmtImage';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.disabled,
    backgroundColor: alpha(theme.palette.common.dark, 0.03),
    height: '100%',
  },
  noRecordRoot: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    paddingTop: 50,
  },
}));

const NoRecordFound = ({ content, ...restProps }) => {
  const classes = useStyles();

  const defaultMsg = 'No result found';
  return (
    <Box p={4} className={classes.root} {...restProps}>
      <Box className={classes.noRecordRoot} {...restProps}>
        <CmtImage src={'/images/icons/search-result.png'} alt="search result" />
        <Box>{content || defaultMsg}</Box>
      </Box>
    </Box>
  );
};

export default NoRecordFound;
