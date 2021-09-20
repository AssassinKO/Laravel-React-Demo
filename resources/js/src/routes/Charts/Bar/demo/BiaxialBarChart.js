import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import data from '../data/data';

const BiaxialBarChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#03275b" />
      <YAxis yAxisId="right" orientation="right" stroke="#19A6D2" />
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
      <Bar yAxisId="left" dataKey="pv" fill="url(#color1)" />
      <Bar yAxisId="right" dataKey="uv" fill="url(#color2)" />
    </BarChart>
  </ResponsiveContainer>
);

export default BiaxialBarChart;
