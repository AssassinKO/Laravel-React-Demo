import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import GridContainer from '../../../@jumbo/components/GridContainer';
import { Grid } from '@material-ui/core';
import LatestNotifications from '../Intranet/LatestNotifications';
import NewRequests from '../Intranet/NewRequests';
import RecentActivities from '../Intranet/RecentActivities';
import DailyFeed from '../Intranet/DailyFeed';
import TaskListExpandable from '../Intranet/TaskListExpandable';
import MarketingCampaign from '../../Widgets/Classic/MarketingCampaign';
import CurrentProjectsSummary from '../../Widgets/Classic/CurrentProjectsSummary';
import CalendarEvents from '../Intranet/CalendarEvents';
import YearlySalesReport from '../ECommerce/YearlySalesReport';
import BecomePro from '../../Metrics/Classic/BecomePro';
import GoogleInsightScore from '../../Metrics/Classic/GoogleInsightScore';
import OnlineSignups from '../ECommerce/OnlineSignups';
import LastMonthSale from '../ECommerce/LastMonthSale';
import TotalRevenue from '../ECommerce/TotalRevenue';
import TotalEmailSent from '../ECommerce/TotalEmailSent';
import WeatherDetail from '../../Widgets/Classic/Weather/WeatherDetail';
import ProductImage from '../../Widgets/Classic/ProductImage';
import OurOffice from '../Intranet/OurOffice';
import LatestPosts from '../../Widgets/Classic/LatestPosts';
import SiteVisitor from '../../Widgets/Classic/SiteVisitor';
import ProjectWorkedHours from '../Intranet/ProjectWorkedHours';
import UserPhotos from '../Intranet/UserPhotos';
import UserDetail from '../../Widgets/Classic/UserDetail';
import IdeasWidget from '../../Metrics/Classic/IdeasWidget';
import Documents from '../../Metrics/Classic/Documents';
import UserSummery from '../../Widgets/Modern/UserSummery';
import UserProfileDetail from '../../Widgets/Classic/UserProfileDetail';
import UserStatstics from '../../Widgets/Classic/UserStatstics';
import CitiesBgCard from '../../Widgets/Classic/CitiesBgCard';
import UserOrders from '../../Widgets/Classic/UserOrders';
import CafeBasilico from '../../Widgets/Classic/CafeBasilico';
import MapWidget from '../Intranet/MapWidget';
import PopularProducts from '../ECommerce/PopularProducts';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const useStyles = makeStyles(theme => ({
  productImage: {
    '& .Cmt-card-media': {
      [theme.breakpoints.up('xl')]: {
        paddingTop: '118%',
      },
    },
  },
  dailyFeedRoot: {
    position: 'relative',
    '& .scrollbar-container': {
      height: 346,
    },
  },
  calenEventsRoot: {
    position: 'relative',
    '& .scrollbar-container': {
      height: 202,
    },
  },
  popularProductRoot: {
    '& .scrollbar-container': {
      height: '266px !important',
    },
  },
  userPhotosRoot: {
    '& .scrollbar-container': {
      height: '266px !important',
    },
  },
  becomeProsRoot: {
    height: '100%',
    '& .Cmt-imgRoot': {
      marginBottom: 16,
      '& img': {
        width: 40,
        height: 40,
      },
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Misc', isActive: true },
];

const MiscDashboard = () => {
  const classes = useStyles();

  return (
    <PageContainer heading="Misc Dashboard" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} md={5} xl={4}>
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

        <Grid item xs={12} xl={4}>
          <GridContainer>
            <Grid item xs={12} sm={6} xl={12}>
              <UserOrders />
            </Grid>
            <Grid item xs={12} sm={6} xl={12}>
              <UserSummery />
            </Grid>
          </GridContainer>
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <UserProfileDetail />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <NewRequests />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <RecentActivities />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <TaskListExpandable />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <MarketingCampaign />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CurrentProjectsSummary />
        </Grid>
        <Grid item xs={12} xl={4}>
          <LatestNotifications />
        </Grid>
        <Grid item xs={12} md={7} xl={4}>
          <Box className={classes.dailyFeedRoot}>
            <DailyFeed />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} xl={4}>
          <Box className={classes.calenEventsRoot}>
            <CalendarEvents />
          </Box>
        </Grid>
        <Grid item xs={12} xl={5}>
          <YearlySalesReport />
        </Grid>
        <Grid item xs={12} sm={4} xl={2}>
          <Box className={classes.becomeProsRoot}>
            <BecomePro />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} xl={5}>
          <GoogleInsightScore />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OnlineSignups />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LastMonthSale />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TotalEmailSent />
        </Grid>
        <Grid item xs={12} md={5} xl={4}>
          <WeatherDetail />
        </Grid>
        <Grid item xs={12} md={7} xl={5}>
          <LatestPosts />
        </Grid>
        <Grid item xs={12} xl={3}>
          <Box className={classes.productImage}>
            <ProductImage />
          </Box>
        </Grid>
        <Grid item xs={12} xl={8}>
          <Box className={classes.popularProductRoot}>
            <PopularProducts />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} xl={4}>
          <OurOffice />
        </Grid>
        <Grid item xs={12} md={7} xl={4}>
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
        <Grid item xs={12} md={6} xl={4}>
          <CafeBasilico />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <UserDetail />
        </Grid>
        <Grid item xs={12}>
          <MapWidget />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default MiscDashboard;
