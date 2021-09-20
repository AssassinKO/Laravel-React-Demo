import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import data from '../data/data';

const COLORS = ['#6200EE', '#0795F4', '#FF8C00', '#F44336'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartWithCustomizedLabel = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie dataKey="value" data={data} labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#6200EE">
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartWithCustomizedLabel;
