import React from 'react';
import { Box, Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../@jumbo/components/GridContainer';
import NewRequests from '../../Dashboards/Intranet/NewRequests';
import RecentActivities from '../../Dashboards/Intranet/RecentActivities';
import CurrentProjectsSummary from './CurrentProjectsSummary';
import MarketingCampaign from './MarketingCampaign';
import TaskListExpandable from '../../Dashboards/Intranet/TaskListExpandable';
import WeeklySales from '../../Dashboards/Intranet/WeeklySales';
import Calculator from '../../Dashboards/Crypto/Calculator';
import CurrentPlan from '../../Dashboards/Listing/CurrentPlan';
import CalendarEvents from '../../Dashboards/Intranet/CalendarEvents';
import DailyFeed from '../../Dashboards/Intranet/DailyFeed';
import LatestNotifications from '../../Dashboards/Intranet/LatestNotifications';
import OurOffice from '../../Dashboards/Intranet/OurOffice';
import WeatherDetail from './Weather/WeatherDetail';
import LatestPosts from './LatestPosts';
import SiteVisitor from './SiteVisitor';
import ProductImage from './ProductImage';
import CafeBasilico from './CafeBasilico';
import UserPhotos from '../../Dashboards/Intranet/UserPhotos';
import ProjectWorkedHours from './ProjectWorkedHours';
import UserProfileDetail from './UserProfileDetail';
import PopularProducts from '../../Dashboards/ECommerce/PopularProducts';
import UserDetail from './UserDetail';
import CitiesBgCard from './CitiesBgCard';
import IdeasWidget from '../../Metrics/Classic/IdeasWidget';
import Documents from '../../Metrics/Classic/Documents';
import WordOfTheDay from './WordOfTheDay';
import UserStatstics from './UserStatstics';
import UserSummery from '../Modern/UserSummery';
import UserOrders from './UserOrders';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const useStyles = makeStyles(() => ({
  dailyFeedRoot: {
    '& .scrollbar-container': {
      height: 332,
    },
  },
  userPhotosRoot: {
    '& .scrollbar-container': {
      height: '272px !important',
    },
  },
  latestNotiRoot: {
    '& .scrollbar-container': {
      height: 353,
    },
  },
  weeklySalesRoot: {
    '& .scrollbar-container': {
      height: 240,
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Widgets', link: '/widgets' },
  { label: 'Classic', isActive: true },
];

const Modern = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Classic Widgets" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} md={6} xl={3}>
          <UserProfileDetail />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <NewRequests />
        </Grid>
        <Grid item xs={12} sm={12} lg={6} xl={5}>
          <RecentActivities />
        </Grid>
        <Grid item xs={12} lg={6} xl={4}>
          <CurrentProjectsSummary />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <MarketingCampaign />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <TaskListExpandable />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box className={classes.weeklySalesRoot}>
            <WeeklySales />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Calculator />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CurrentPlan />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <UserStatstics />
        </Grid>

        <Grid item xs={12} md={7} xl={4}>
          <GridContainer>
            <Grid item xs={12} sm={6}>
              <IdeasWidget />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Documents />
            </Grid>

            <Grid item xs={12} md={12}>
              <CitiesBgCard />
            </Grid>
          </GridContainer>
        </Grid>

        <Grid item xs={12} md={5} xl={4}>
          <GridContainer>
            <Grid item xs={12} sm={6} md={12}>
              <UserOrders />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <UserSummery />
            </Grid>
          </GridContainer>
        </Grid>

        <Grid item xs={12} md={6} xl={3}>
          <CalendarEvents />
        </Grid>
        <Grid item xs={12} md={6} xl={5}>
          <Box className={classes.dailyFeedRoot}>
            <DailyFeed />
          </Box>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Box className={classes.latestNotiRoot}>
            <LatestNotifications />
          </Box>
        </Grid>
        <Grid item xs={12} xl={8}>
          <PopularProducts />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <OurOffice />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <WeatherDetail />
        </Grid>
        <Grid item xs={12} md={6} xl={5}>
          <LatestPosts />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <GridContainer>
            <Grid item xs={12} sm={6} md={12}>
              <WordOfTheDay />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <ProductImage />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Box className={classes.userPhotosRoot}>
            <UserPhotos />
          </Box>
        </Grid>
        <Grid item xs={12} xl={8}>
          <SiteVisitor />
        </Grid>
        <Grid item xs={12} xl={4}>
          <ProjectWorkedHours />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <CafeBasilico />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <UserDetail />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Modern;
