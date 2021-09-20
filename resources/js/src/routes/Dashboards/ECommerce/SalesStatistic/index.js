import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import StatisticList from './StatisticList';
import Box from '@material-ui/core/Box';
import SalesGauge from './SalesGauge';
import SalesAreaChart from './SalesAreaChart';
import { eCommerce } from '../../../../@fake-db';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    position: 'relative',
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  salesGaugeRoot: {
    color: theme.palette.text.primary,
    '& text': {
      fill: theme.palette.text.primary,
    },
  },
}));

const SalesStatistic = () => {
  const classes = useStyles();
  const { salesStatistic } = eCommerce;
  return (
    <CmtAdvCard>
      <CmtCardHeader title={salesStatistic.title} />
      <CmtAdvCardContent className={classes.cardContentRoot}>
        <Box mb={{ xs: 5, sm: 8, lg: 11 }}>
          <StatisticList statisticList={salesStatistic.statisticList} />
        </Box>
        <GridContainer>
          <Grid item xs={12} lg={8}>
            <SalesAreaChart salesStatisticData={salesStatistic.salesStatisticData} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box className={classes.salesGaugeRoot}>
              <SalesGauge salesGaugeData={salesStatistic.salesGaugeData} />
            </Box>
          </Grid>
        </GridContainer>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default SalesStatistic;
