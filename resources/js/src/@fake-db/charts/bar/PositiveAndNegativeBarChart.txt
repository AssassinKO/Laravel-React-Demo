import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: -3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: -2000, pv: -9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: -1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: -3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const PositiveAndNegativeBarChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
      <Legend />
      <defs>
        <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
          <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
          <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
        </linearGradient>
      </defs>
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="pv" fill="url(#color1)" />
      <Bar dataKey="uv" fill="url(#color2)" />
    </BarChart>
  </ResponsiveContainer>
);

export default PositiveAndNegativeBarChart;
