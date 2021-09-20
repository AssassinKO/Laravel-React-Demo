import React from 'react';
import PropertiesGraph from './PropertiesGraph';
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

const PropertiesStatistics = () => {
  const classes = useStyles();
  return (
    <StatisticsCard
      className={classes.cardRoot}
      backgroundColor="#7D38DF"
      title="Properties"
      titleProps={{
        variant: 'inherit',
        component: 'h4',
        className: classes.titleRoot,
      }}
      amount="26,873"
      description="03% this week">
      <PropertiesGraph />
    </StatisticsCard>
  );
};

export default PropertiesStatistics;
