import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    color: theme.palette.common.white,
    marginBottom: 14,
  },
}));

const UnreadMessages = () => {
  const classes = useStyles();
  return (
    <CmtCard backgroundColor={['#DD2E82', '#0144A7']} gradientDirection="270deg">
      <CmtCardContent>
        <Box mb={{ xs: 5, xl: 7 }} display="flex" justifyContent="space-between">
          <CmtImage alt="message" src={'/images/dashboard/icon-markunread-mailbox.png'} />
          <ArrowForwardIcon style={{ color: 'white' }} />
        </Box>
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          271
        </Typography>
        <Box component="p" mb={0} color="white">
          Unread messages
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default UnreadMessages;
