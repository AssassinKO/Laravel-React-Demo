import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import data from '../data/data';

const DashedLineChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#6200EE" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#19A6D2" strokeDasharray="3 4 5 2" />
    </LineChart>
  </ResponsiveContainer>
);

export default DashedLineChart;
