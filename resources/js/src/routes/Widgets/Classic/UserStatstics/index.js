import React from 'react';
import { Box } from '@material-ui/core';
import CmtCard from '../../../../@coremat/CmtCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import clsx from 'clsx';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { classicWidget } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  dot: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    backgroundColor: '#E0E0E0',
  },
  dotPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
}));

const DataChart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height={170}>
      <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" hide />
        <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: '#4D95F3' }} cursor={false} />
        <defs>
          <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="#00C2B7" stopOpacity={1} />
            <stop offset="95%" stopColor="#3D39FB" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="expence"
          type="monotone"
          strokeWidth={0}
          stackId="1"
          stroke="#e0e0e0"
          fill="#e0e0e0"
          fillOpacity={1}
        />
        <Area
          dataKey="income"
          type="monotone"
          strokeWidth={0}
          stackId="2"
          stroke="#4D95F3"
          fill="url(#color2)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const UserStatstics = () => {
  const classes = useStyles();
  const { userStatistics } = classicWidget;

  return (
    <CmtCard>
      <CmtCardHeader
        title="User Statstics"
        subTitle={
          <Box display="flex" alignItems="center" mt={2}>
            <Box component="span" display="flex" alignItems="center" mr={4}>
              <Box component="span" className={clsx(classes.dot, classes.dotPrimary)} mr={1} />
              <Box component="span" color="text.secondary" fontSize={12} className={classes.textCapitalize}>
                {userStatistics.labelIncome}
              </Box>
            </Box>
            <Box component="span" display="flex" alignItems="center">
              <Box component="span" className={classes.dot} mr={1} />
              <Box component="span" color="text.secondary" fontSize={12} className={classes.textCapitalize}>
                {userStatistics.labelExpence}
              </Box>
            </Box>
          </Box>
        }
      />
      <DataChart chartData={userStatistics.chartData} />
    </CmtCard>
  );
};

export default UserStatstics;
