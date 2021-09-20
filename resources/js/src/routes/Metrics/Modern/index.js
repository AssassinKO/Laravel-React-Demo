import React from 'react';
import { Box, Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../@jumbo/components/GridContainer';
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import TrafficRaise from './TrafficRaise';
import CounterCard from '../../../@jumbo/components/Common/CounterCard';
import CmtImage from '../../../@coremat/CmtImage';
import PropertiesStatistics from '../../Dashboards/Listing/PropertiesStatistics';
import CitiesStatistics from '../../Dashboards/Listing/CitiesStatistics';
import VisitsStatistics from '../../Dashboards/Listing/VisitsStatistics';
import QueriesStatistics from '../../Dashboards/Listing/QueriesStatistics';
import GrowthCard from '../../../@jumbo/components/Common/GrowthCard';
import RevenueHistory from '../../Dashboards/Crm/RevenueHistory';
import QueriesHistory from './QueriesHistory';
import TotalIncome from './TotalIncome';
import { metrics } from '../../../@fake-db';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const useStyles = makeStyles(() => ({
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '50%',
    height: 66,
    minWidth: 66,
    width: 66,
  },
}));

const breadcrumbs = [
  { label: 'App', link: '/app' },
  { label: 'Metrics', link: '/app/metrics' },
  { label: 'Modern', isActive: true },
];

const Modern = () => {
  const classes = useStyles();
  const {
    eCommerceData,
    dataMetrics,
    orders,
    activeUsers,
    extraRevenue,
    trafficRaise,
    revenueGrowth,
    trafficData,
  } = metrics;
  return (
    <PageContainer heading="Metrics Modern" breadcrumbs={breadcrumbs}>
      <GridContainer>
        {eCommerceData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <CounterCard
              icon={
                <Box className={classes.iconWrapper} style={{ borderColor: item.color + '88' }}>
                  <CmtImage src={item.imageIcon} alt="..." />
                </Box>
              }
              number={item.title}
              numberProps={{
                color: 'text.primary',
                fontSize: { xs: 20, xl: 22 },
                fontWeight: 'bold',
              }}
              label={item.subTitle}
              labelProps={{
                color: 'text.secondary',
                fontSize: 12,
                fontWeight: 'normal',
              }}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} lg={3}>
          <GrowthCard growth={84} desc="Increment in Active users">
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart
                data={activeUsers}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                gradientTransform="rotate(180)">
                <XAxis dataKey="month" hide />
                <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
                <defs>
                  <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="43.68%" stopColor="#6200EE" stopOpacity={1} />
                    <stop offset="126.94%" stopColor="#B819D2" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="users"
                  type="monotone"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color1)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </GrowthCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <GrowthCard growth={-38} desc="Less orders from past year">
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart data={orders} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" hide />
                <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
                <defs>
                  <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#00C2B7" stopOpacity={1} />
                    <stop offset="95%" stopColor="#3D39FB" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area dataKey="pv" strokeWidth={0} stackId="2" stroke="#4D95F3" fill="url(#color2)" fillOpacity={1} />
              </AreaChart>
            </ResponsiveContainer>
          </GrowthCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <GrowthCard growth={38} desc="Extra revenue from last year">
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart data={extraRevenue} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" hide />
                <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
                <defs>
                  <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="10%" stopColor="#EC1809" stopOpacity={1} />
                    <stop offset="90%" stopColor="#FF9F0E" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="amt"
                  type="monotone"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color3)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </GrowthCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <GrowthCard growth={44} desc="Traffic raise from past year">
            <ResponsiveContainer width="100%" height={75}>
              <LineChart data={trafficRaise} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <XAxis dataKey="month" hide />
                <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
                <Line dataKey="traffic" strokeWidth={2} stroke="#6200EE" dot={{ stroke: '#6200EE', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </GrowthCard>
        </Grid>
        {dataMetrics.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4} xl={2}>
            <CounterCard
              backgroundColor={item.bgColor}
              icon={
                <Box className={classes.iconWrapper} style={{ borderColor: item.color, backgroundColor: '#ffffff' }}>
                  <CmtImage src={item.imageIcon} alt="..." />
                </Box>
              }
              number={item.title}
              numberProps={{ fontSize: 22, fontWeight: 'bold' }}
              label={item.desc}
              labelProps={{
                variant: 'span',
                fontSize: 12,
                color: item.bgColor ? item.color + '99' : 'text.hint',
              }}
              color={item.color}
              alignCenter
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} lg={4} xl={2}>
          <GrowthCard growth={92} desc="Growth in revenue">
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={revenueGrowth} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" hide />
                <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
                <defs>
                  <linearGradient id="color5" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(90)">
                    <stop offset="5%" stopColor="#1CACCE44" stopOpacity={1} />
                    <stop offset="95%" stopColor="#1CACCE01" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="revenue"
                  type="monotone"
                  strokeWidth={2}
                  stackId="2"
                  stroke="#1CACCE"
                  fill="url(#color5)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </GrowthCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={2}>
          <GrowthCard growth={'07'} desc="Traffic raise">
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={trafficData} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" hide />
                <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
                <defs>
                  <linearGradient id="color6" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(90)">
                    <stop offset="10%" stopColor="#fde6e9" stopOpacity={1} />
                    <stop offset="90%" stopColor="#FFFFFF" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="traffic"
                  type="monotone"
                  strokeWidth={2}
                  stackId="2"
                  stroke="#E36978"
                  fill="url(#color6)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </GrowthCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={2}>
          <GrowthCard growth={-38} desc="Order Reduced">
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={extraRevenue} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" hide />
                <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
                <defs>
                  <linearGradient id="color8" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="10%" stopColor="#EC1809" stopOpacity={1} />
                    <stop offset="90%" stopColor="#FF9F0E" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="amt"
                  type="monotone"
                  strokeWidth={0}
                  stackId="2"
                  stroke="#4D95F3"
                  fill="url(#color8)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </GrowthCard>
        </Grid>
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
        <Grid item xs={12} sm={6} lg={4}>
          <TrafficRaise />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TotalIncome />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <QueriesHistory />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <RevenueHistory />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Modern;
