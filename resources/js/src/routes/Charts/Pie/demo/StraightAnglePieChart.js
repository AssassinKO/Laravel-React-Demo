import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import data from '../data/data';

const StraightAnglePieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie dataKey="value" startAngle={270} endAngle={0} data={data} outerRadius={80} fill="#6200EE" label />
    </PieChart>
  </ResponsiveContainer>
);

export default StraightAnglePieChart;
