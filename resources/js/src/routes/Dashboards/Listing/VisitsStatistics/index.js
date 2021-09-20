import React from 'react';
import VisitsGraph from './VisitsGraph';
import { makeStyles } from '@material-ui/core';
import { StatisticsCard } from '../../../../@jumbo/components/Common';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    color: theme.palette.common.white,
  },
  titleRoot: {
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
}));

const VisitsStatistics = () => {
  const classes = useStyles();
  return (
    <StatisticsCard
      className={classes.cardRoot}
      backgroundColor="#BE4ED0"
      title="Online Visits"
      titleProps={{
        variant: 'inherit',
        component: 'h4',
        className: classes.titleRoot,
      }}
      amount="26,873"
      description="03% this week">
      <VisitsGraph />
    </StatisticsCard>
  );
};

export default VisitsStatistics;
