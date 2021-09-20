import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const VisitorChart = ({ data, color, chartGradientColor }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{ top: 15, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" orientation="top" axisLine={false} />
        <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
        <defs>
          <linearGradient id="color6" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor={chartGradientColor} stopOpacity={1} />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="amount"
          type="monotone"
          strokeWidth={3}
          stackId="2"
          stroke={color}
          fill="url(#color6)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default VisitorChart;
