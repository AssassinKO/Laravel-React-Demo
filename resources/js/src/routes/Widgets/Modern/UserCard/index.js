import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const data = [
  { name: 'Page A', pv: 200 },
  { name: 'Page B', pv: 800 },
  { name: 'Page C', pv: 600 },
  { name: 'Page D', pv: 2200 },
  { name: 'Page D', pv: 1000 },
  { name: 'Page H', pv: 2960 },
  { name: 'Page K', pv: 1960 },
];

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  userTitle: {
    marginBottom: 6,
  },
}));

const UserCard = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <Box display="flex" justifyContent="flex-end" p={6} color="text.hint">
        <SettingsIcon />
      </Box>
      <Box px={6} pb={4}>
        <Box display="flex" alignItems="center" justifyContent="space-around" mb={4} color="text.hint">
          <AssessmentOutlinedIcon />
          <CmtAvatar size={75} alt="..." src={'https://via.placeholder.com/150'} />
          <CommentOutlinedIcon />
        </Box>
        <Box mb={3} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Typography component="div" variant="h4" className={classes.userTitle}>
            Christina Johnson
          </Typography>
          <Box component="p" color="text.secondary">
            Crypto Expert
          </Box>
        </Box>
      </Box>
      <Box mt="auto">
        <Box px={6}>
          <Box display="flex" mb={1}>
            <Box component="span" fontSize={18} fontWeight="fontWeightBold">
              38%
            </Box>
            <TrendingUpOutlinedIcon color="primary" />
          </Box>
          <Box component="p" color="text.secondary" fontSize={12}>
            Productivity
          </Box>
        </Box>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorpro" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#2b2d5d" stopOpacity={1} />
                <stop offset="95%" stopColor="#05bf36" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="pv"
              type="monotone"
              strokeWidth={0}
              stackId="2"
              stroke="#4D95F3"
              fill="url(#colorpro)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </CmtCard>
  );
};

export default UserCard;
