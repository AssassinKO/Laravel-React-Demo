import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import data from '../data/data';

const VerticalLineChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart layout="vertical" data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
      <Legend />
      <Line dataKey="pv" stroke="#6200EE" />
      <Line dataKey="uv" stroke="#19A6D2" />
    </LineChart>
  </ResponsiveContainer>
);

export default VerticalLineChart;
