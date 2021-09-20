import React from 'react';
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import data from '../data/data';

const style = {
  top: 20,
  left: '20%',
  lineHeight: '24px',
};

const SimpleRadialBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <RadialBarChart innerRadius={20} outerRadius={140} barSize={10} data={data}>
      <RadialBar minAngle={15} label background clockWise={true} dataKey="uv" />
      <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
    </RadialBarChart>
  </ResponsiveContainer>
);

export default SimpleRadialBarChart;
