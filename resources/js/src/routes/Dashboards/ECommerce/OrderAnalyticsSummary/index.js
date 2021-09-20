import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RadarChart from './RadarChart';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    '& .Cmt-card-content': {
      flex: 1,
    },
    '& .chartjs-render-monitor': {
      fill: theme.palette.text.primary,
      color: theme.palette.text.primary,
    },
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    backgroundColor: '#7F39FB',
  },
  dotBlue: {
    backgroundColor: '#03DAC5',
  },
}));

const OrderAnalyticsSummary = () => {
  const classes = useStyles();
  return (
    <CmtAdvCard className={classes.cardRoot}>
      <CmtCardHeader title={'Orders'} />
      <CmtAdvCardContent>
        <RadarChart />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box component="span" display="flex" alignItems="center" mr={4}>
            <Box component="span" className={classes.dot} mr={2} />
            <Box component="span" color="text.secondary" fontSize={12}>
              Ordered
            </Box>
          </Box>
          <Box component="span" display="flex" alignItems="center">
            <Box component="span" className={clsx(classes.dot, classes.dotBlue)} mr={2} />
            <Box component="span" color="text.secondary" fontSize={12}>
              Pending
            </Box>
          </Box>
        </Box>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default OrderAnalyticsSummary;
