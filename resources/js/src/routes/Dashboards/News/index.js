import React from 'react';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PopularAuthors from './PopularAuthors';
import AvgDailyTraffic from './AvgDailyTraffic';
import Comments from './Comments';
import DailyFeed from './DailyFeed';
import NewAuthors from './NewAuthors';
import NewsArticles from './NewsArticles';
import PopularArticles from './PopularArticles';
import StoryOfTheDay from './StoryOfTheDay';
import SiteTraffic from './SiteTraffic';
import NewSubscribers from './NewSubscibers';
import LatestNotifications from '../Intranet/LatestNotifications';
import MarketingCampaign from '../../Widgets/Classic/MarketingCampaign';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'News', isActive: true },
];

const NewsDashboard = () => {
  return (
    <PageContainer heading="News Dashboard" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} sm={6} xl={3}>
          <NewSubscribers />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <NewsArticles />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <NewAuthors />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <AvgDailyTraffic />
        </Grid>
        <Grid item xs={12} md={5}>
          <PopularAuthors />
        </Grid>
        <Grid item xs={12} md={7}>
          <PopularArticles />
        </Grid>
        <Grid item xs={12} xl={4}>
          <LatestNotifications />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <StoryOfTheDay />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <MarketingCampaign />
        </Grid>
        <Grid item xs={12} md={6}>
          <Comments />
        </Grid>
        <Grid item xs={12} md={6}>
          <DailyFeed />
        </Grid>
        <Grid item xs={12}>
          <SiteTraffic />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default NewsDashboard;
