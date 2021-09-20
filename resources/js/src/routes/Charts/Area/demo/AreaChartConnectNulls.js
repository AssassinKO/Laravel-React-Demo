import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box } from '@material-ui/core';

const data = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D' },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];
const AreaChartConnectNulls = () => (
  <React.Fragment>
    <Box mb={10}>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
          <Area type="monotone" dataKey="uv" stroke="" fill="url(#color3)" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
    <Box>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
          <Area connectNulls={true} type="monotone" dataKey="uv" stroke="" fill="url(#color3)" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  </React.Fragment>
);

export default AreaChartConnectNulls;
