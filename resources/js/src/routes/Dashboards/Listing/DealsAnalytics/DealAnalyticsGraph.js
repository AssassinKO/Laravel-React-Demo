import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { dealsAnalyticsData } from '../../../../@fake-db';

const DealAnalyticsGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={134}>
      <BarChart data={dealsAnalyticsData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          itemStyle={{ color: '#0795F4' }}
          labelFormatter={function(value) {
            return `Month: ${value}`;
          }}
          cursor={false}
        />
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <Bar dataKey="deals" stackId="a" fill="#0795F4" barSize={8} />
        <Bar dataKey="queries" stackId="a" fill="#9BE7FD" barSize={8} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DealAnalyticsGraph;
