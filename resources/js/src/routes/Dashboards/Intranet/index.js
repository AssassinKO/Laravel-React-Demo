import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';

import HeaderChartComponent from './HeaderChartComponent';
import CalendarEvents from './CalendarEvents';
import DailyFeed from './DailyFeed';
import NewRequests from './NewRequests';
import RecentActivities from './RecentActivities';
import TaskListExpandable from './TaskListExpandable';
import UserDetail from './UserDetail';
import WeeklySales from './WeeklySales';
import GridContainer from '../../../@jumbo/components/GridContainer';
import CurrentProjectsSummary from './CurrentProjectsSummary';
import LatestNotifications from './LatestNotifications';
import ProjectWorkedHours from './ProjectWorkedHours';
import PopularProducts from './PopularProducts';
import UserPhotos from './UserPhotos';
import OurOffice from './OurOffice';
import ToggleAnalyticsCard from './ToggleAnalyticsCard';
import VisitedToggleAnalyticsCard from './ToggleAnalyticsCard/VisitedToggleAnalyticsCard';
import MapWidget from './MapWidget';
import MarketingCampaign from '../../Widgets/Classic/MarketingCampaign';
import SiteVisitors from './SiteVisitors';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

import { intranet } from '../../../@fake-db';

const useStyles = makeStyles(theme => ({
  pageFull: {
    width: '100%',
    '& .page-header': {
      position: 'relative',
      zIndex: 3,
      '& .title, & .bread-crumbs, & .bread-crumbs a, & .bread-crumbs .MuiTypography-colorTextPrimary': {
        color: theme.palette.common.white,
      },
    },
  },
  userPhotosRoot: {
    '& .scrollbar-container': {
      height: '272px !important',
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Intranet', isActive: true },
];

const IntranetDashboard = () => {
  const classes = useStyles();

  return (
    <PageContainer heading="Intranet" breadcrumbs={breadcrumbs} className={classes.pageFull}>
      <GridContainer>
        <Grid item xs={12}>
          <HeaderChartComponent data={intranet.headerChartData} />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <ToggleAnalyticsCard data={intranet.monthlyTopChart} />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <ToggleAnalyticsCard data={intranet.annualTopChart} />
        </Grid>

        <Grid item xs={12} xl={6}>
          <VisitedToggleAnalyticsCard data={intranet.monthlyTopChart} />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <UserDetail />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <NewRequests />
        </Grid>
        <Grid item xs={12} md={12} xl={5}>
          <RecentActivities />
        </Grid>
        <Grid item xs={12} md={12} xl={6}>
          <CurrentProjectsSummary />
        </Grid>
        <Grid item xs={12} md={6}>
          <DailyFeed />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <TaskListExpandable />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <MarketingCampaign />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <CalendarEvents />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <LatestNotifications />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <WeeklySales />
        </Grid>
        <Grid item xs={12} xl={4}>
          <ProjectWorkedHours />
        </Grid>
        <Grid item xs={12} xl={8}>
          <SiteVisitors />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <div className={classes.userPhotosRoot}>
            <UserPhotos />
          </div>
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <OurOffice />
        </Grid>

        <Grid item xs={12} xl={8}>
          <MapWidget />
        </Grid>

        <Grid item xs={12}>
          <PopularProducts />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default IntranetDashboard;
