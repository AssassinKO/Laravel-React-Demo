import React from 'react';
import { Grid } from '@material-ui/core';
import GridContainer from '../../../@jumbo/components/GridContainer';
import OnlineSignups from '../../Dashboards/ECommerce/OnlineSignups';
import LastMonthSale from '../../Dashboards/ECommerce/LastMonthSale';
import TotalRevenue from '../../Dashboards/ECommerce/TotalRevenue';
import TotalEmailSent from '../../Dashboards/ECommerce/TotalEmailSent';
import ToggleAnalyticsCard from '../../Dashboards/Intranet/ToggleAnalyticsCard';
import VisitedToggleAnalyticsCard from '../../Dashboards/Intranet/ToggleAnalyticsCard/VisitedToggleAnalyticsCard';
import { intranet } from '../../../@fake-db';
import YearlySalesReport from '../../Dashboards/ECommerce/YearlySalesReport';
import OrderAnalyticsSummary from '../../Dashboards/ECommerce/OrderAnalyticsSummary';
import ApplicationsSummary from '../../Dashboards/ECommerce/ApplicationsSummary';
import OnlineTraffic from '../../Dashboards/ECommerce/OnlineTraffic';
import BecomePro from './BecomePro';
import NewCustomers from './NewCustomers';
import Documents from './Documents';
import NewProducts from './NewProducts';
import IdeasWidget from './IdeasWidget';
import NewSubscribers from '../../Dashboards/News/NewSubscibers';
import NewsArticles from '../../Dashboards/News/NewsArticles';
import NewAuthors from '../../Dashboards/News/NewAuthors';
import AvgDailyTraffic from '../../Dashboards/News/AvgDailyTraffic';
import GoogleInsightScore from './GoogleInsightScore';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Metrics', link: '/metrics' },
  { label: 'Classic', isActive: true },
];

const ClassicMetrics = () => {
  return (
    <PageContainer heading="Metrics Classic" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} sm={6} xl={3}>
          <OnlineSignups />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <LastMonthSale />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <TotalEmailSent />
        </Grid>

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

        <Grid item xs={12} sm={6} xl={3}>
          <ToggleAnalyticsCard data={intranet.monthlyTopChart} />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <ToggleAnalyticsCard data={intranet.annualTopChart} />
        </Grid>
        <Grid item xs={12} xl={6}>
          <VisitedToggleAnalyticsCard data={intranet.monthlyTopChart} />
        </Grid>

        <Grid item xs={12} md={6}>
          <YearlySalesReport />
        </Grid>

        <Grid item xs={12} md={6}>
          <GoogleInsightScore />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <OrderAnalyticsSummary />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <OnlineTraffic />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <BecomePro />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <ApplicationsSummary />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <IdeasWidget />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <Documents />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <NewCustomers />
        </Grid>

        <Grid item xs={12} sm={6} xl={3}>
          <NewProducts />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ClassicMetrics;
