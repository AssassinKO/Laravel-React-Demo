import React from 'react';
import QueriesGraph from './QueriesGraph';
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

const QueriesStatistics = () => {
  const classes = useStyles();
  return (
    <StatisticsCard
      className={classes.cardRoot}
      backgroundColor="#E86C63"
      title="Online Queries"
      titleProps={{
        variant: 'inherit',
        component: 'h4',
        className: classes.titleRoot,
      }}
      amount="26,873"
      description="03% this week">
      <QueriesGraph />
    </StatisticsCard>
  );
};

export default QueriesStatistics;
