import React from 'react';
import { Grid } from '@material-ui/core';
import CurrentPlan from './CurrentPlan';
import DealsAnalytics from './DealsAnalytics';
import PopularAgents from './PopularAgents';
import PropertiesListing from './PropertiesListing';
import PropertiesStatistics from './PropertiesStatistics';
import QueriesStatistics from './QueriesStatistics';
import RecentActivities from './RecentActivities';
import VisitsStatistics from './VisitsStatistics';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import CitiesStatistics from './CitiesStatistics';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const useStyles = makeStyles(theme => ({
  orderLg2: {
    [theme.breakpoints.up('lg')]: {
      order: 2,
    },
  },
  orderLg1: {
    [theme.breakpoints.up('lg')]: {
      order: 1,
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Listing', isActive: true },
];

const ListingDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Listing Dashboard" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} sm={6} md={3}>
          <PropertiesStatistics />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CitiesStatistics />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <VisitsStatistics />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <QueriesStatistics />
        </Grid>
        <Grid item xs={12} lg={12} xl={4} className={classes.orderLg2}>
          <RecentActivities />
        </Grid>
        <Grid item xs={12} lg={12} xl={8} className={classes.orderLg1}>
          <Box pb={6}>
            <PopularAgents />
          </Box>
          <GridContainer>
            <Grid item xs={12} md={6}>
              <CurrentPlan />
            </Grid>
            <Grid item xs={12} md={6}>
              <DealsAnalytics />
            </Grid>
            <Grid item xs={12}>
              <PropertiesListing />
            </Grid>
          </GridContainer>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ListingDashboard;
