import React from 'react';
import Box from '@material-ui/core/Box';
import DealAnalyticsGraph from './DealAnalyticsGraph';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
  },
  subTitle: {
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    backgroundColor: '#9BE7FD',
  },
  dotBlue: {
    backgroundColor: '#0795F4',
  },
}));

const DealsAnalytics = () => {
  const classes = useStyles();
  const getTitle = () => (
    <Typography component="div" variant="h4">
      <Box component="span" color="primary.main" mr={2}>
        927
      </Box>
      Deals Closed
    </Typography>
  );
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title={getTitle()} />
      <CmtCardContent>
        <Box display="flex" alignItems="center" mb={4}>
          <Typography className={classes.subTitle}>This year</Typography>
          <Box display="flex" alignItems="center" ml="auto">
            <Box component="span" display="flex" alignItems="center" mr={2}>
              <Box component="span" className={classes.dot} mr={2} mt={1} />
              <Box component="span" color="text.secondary" fontSize={12}>
                Queries
              </Box>
            </Box>
            <Box component="span" display="flex" alignItems="center">
              <Box component="span" className={clsx(classes.dot, classes.dotBlue)} mr={2} mt={1} />
              <Box component="span" color="text.secondary" fontSize={12}>
                Closed Deals
              </Box>
            </Box>
          </Box>
        </Box>
        <DealAnalyticsGraph />
      </CmtCardContent>
    </CmtCard>
  );
};

export default DealsAnalytics;
