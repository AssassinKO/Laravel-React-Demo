import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { modernWidget } from '../../../../@fake-db/widgets/modern';

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const IncrementUsers = () => {
  const classes = useStyles();
  const { activeUsers } = modernWidget;

  return (
    <CmtCard className={classes.cardRoot}>
      <Box display="flex" alignItems="center" p={4}>
        <Box display="flex" alignItems="center">
          <Typography component="div" variant="h4">
            {activeUsers.percent}
          </Typography>
          <ArrowDropUpIcon />
        </Box>
        <Box ml={2} component="p" color="text.secondary">
          {activeUsers.text}
        </Box>
      </Box>
      <Box mt="auto">
        <ResponsiveContainer width="100%" height={52}>
          <AreaChart data={activeUsers.chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
                <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="pv" stackId="2" strokeWidth={0} stroke="#4D95F3" fill="url(#color4)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </CmtCard>
  );
};

export default IncrementUsers;
