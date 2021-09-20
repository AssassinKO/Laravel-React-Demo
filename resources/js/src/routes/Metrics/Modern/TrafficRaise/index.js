import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TrafficChart from './TrafficChart';
import { metrics } from '../../../../@fake-db';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardContentRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    '& .MuiGrid-container': {
      alignItems: 'center',
    },
  },
  subTitleRoot: {
    fontSize: 14,
    marginBottom: 0,
    color: theme.palette.text.secondary,
  },
}));

const TrafficRaise = () => {
  const classes = useStyles();

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        columnSizes={[5, 7]}
        title={
          <Box component="div" fontSize={22} mb={1} fontWeight={700} lineHeight={1}>
            0.7%
          </Box>
        }
        subTitle="Traffic raise"
        subTitleProps={{
          component: 'div',
          className: classes.subTitleRoot,
        }}
        reverseDir>
        <Box mt={5}>
          <TrafficChart data={metrics.traffics} />
        </Box>
      </CmtAdvCardContent>
    </CmtCard>
  );
};

export default TrafficRaise;
