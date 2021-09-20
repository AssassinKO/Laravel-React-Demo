import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const SalesReportGraph = ({ saleHistory }) => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart data={saleHistory}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          labelFormatter={function(value) {
            return `Month: ${value}`;
          }}
          formatter={function(value) {
            return [value, 'Amount'];
          }}
        />
        <Bar dataKey="amt" fill="#6200EE" maxBarSize={10} />
        <XAxis stroke="#6200EE" dataKey="name" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesReportGraph;
