import React from 'react';
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import data from '../data/data';
import { Box } from '@material-ui/core';

const SynchronizedLineChart = () => (
  <Box>
    <Box mb={10}>
      <Box component="h4" mb={4}>
        A demo of synchronized AreaCharts
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} syncId="anyId" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
          <Line type="monotone" dataKey="uv" stroke="#6200EE" fill="#6200EE" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
    <Box mb={10}>
      <Box component="h4" mb={4}>
        Maybe some other content
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} syncId="anyId" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
          <Line type="monotone" dataKey="pv" stroke="#6200EE" fill="#6200EE" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
    <Box>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} syncId="anyId" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
          <Area type="monotone" dataKey="pv" stroke="#6200EE" fill="#6200EE" />
          <Brush />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  </Box>
);

export default SynchronizedLineChart;
