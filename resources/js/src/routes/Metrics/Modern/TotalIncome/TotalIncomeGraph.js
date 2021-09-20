import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const TotalIncomeGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={80} gradientTransform="rotate(180)">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" hide />
        <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
        <defs>
          <linearGradient id="incomeColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="22.02%" stopColor="#6200EE" stopOpacity={1} />
            <stop offset="137.31%" stopColor="#B819D2" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area dataKey="income" strokeWidth={0} stackId="2" stroke="#4D95F3" fill="url(#incomeColor)" fillOpacity={1} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TotalIncomeGraph;
