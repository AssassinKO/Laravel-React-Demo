import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import data from '../data/data';
import { Box } from '@material-ui/core';

const SynchronizedAreaChart = () => (
  <React.Fragment>
    <Box mb={10}>
      <Box component="h4" mb={4}>
        A demo of synchronized AreaCharts
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} syncId="anyId" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
          <defs>
            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
              <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="uv" stroke="" fill="url(#color2)" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
    <Box>
      <Box component="h4" mb={4}>
        Maybe some other content
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} syncId="anyId" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
          <defs>
            <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
              <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="pv" stroke="" fill="url(#color3)" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  </React.Fragment>
);

export default SynchronizedAreaChart;
