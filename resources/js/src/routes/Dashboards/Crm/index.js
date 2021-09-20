import React from 'react';

import { Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import RecentTickets from './RecentTickets';
import RevenueOverview from './RevenueOverview';
import TasksList from './TasksList';
import WelcomeSummary from './WelcomeSummary';
import RecentActivities from '../Listing/RecentActivities';
import Calculator from '../Crypto/Calculator';
import TicketsStatus from './TicketsStatus';
import RevenueHistory from './RevenueHistory';
import NewCustomers from './NewCustomers';
import ProjectCounterCard from './ProjectCounterCard';
import FilesCounterCard from './FilesCounterCard';
import TasksCounterCard from './TasksCounterCard';
import TeamsCounterCard from './TeamsCounterCard';
import Growth from './Growth';

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
  { label: 'Crm', isActive: true },
];

const CrmDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Crm Dashboard" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <WelcomeSummary />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <RevenueHistory />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <NewCustomers />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Growth />
        </Grid>
        <Grid item xs={12} xl={4} className={classes.orderLg2}>
          <div className={'mb-6'}>
            <RecentActivities />
          </div>
          <div>
            <Calculator />
          </div>
        </Grid>
        <Grid item xs={12} xl={8} className={classes.orderLg1}>
          <GridContainer>
            <Grid item xs={12} sm={6} md={3}>
              <ProjectCounterCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TasksCounterCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TeamsCounterCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FilesCounterCard />
            </Grid>

            <Grid item xs={12}>
              <TasksList />
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <RecentTickets />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <TicketsStatus />
            </Grid>

            <Grid item xs={12}>
              <RevenueOverview />
            </Grid>
          </GridContainer>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default CrmDashboard;
