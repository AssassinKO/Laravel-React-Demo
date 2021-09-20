import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import CmtCard from '../../../../@coremat/CmtCard';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const data = [
  { name: 'Page A', uv: 1900, pv: 3200 },
  { name: 'Page B', uv: 1300, pv: 4000 },
  { name: 'Page C', uv: 1850, pv: 2500 },
  { name: 'Page D', uv: 1680, pv: 3000 },
  { name: 'Page H', uv: 3900, pv: 2560 },
  { name: 'Page I', uv: 1400, pv: 2700 },
  { name: 'Page J', uv: 2200, pv: 2000 },
  { name: 'Page K', uv: 1300, pv: 2000 },
  { name: 'Page L', uv: 1880, pv: 3408 },
  { name: 'Page M', uv: 2290, pv: 2960 },
];

const WorkStatus = () => {
  return (
    <CmtCard>
      <Box bgcolor="#23036A">
        <Box component="p" p={4} color="white" display="flex" alignItems="center" fontSize={16}>
          76% <ArrowDropUpIcon />
        </Box>
        <ResponsiveContainer width="100%" height={75}>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <Area type="monotone" dataKey="pv" stackId="2" stroke="#00bcd4" fill="#00bcd4" fillOpacity={1} />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#3f51b5" fill="#3f51b5" fillOpacity={1} />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
      <Box p={{ xs: 4, xl: 5 }}>
        <Typography component="div" variant="h3">
          Works Status
        </Typography>
        <Box component="p" fontSize={12} mt={1} color="text.secondary">
          Last week progress
        </Box>
      </Box>
    </CmtCard>
  );
};

export default WorkStatus;
