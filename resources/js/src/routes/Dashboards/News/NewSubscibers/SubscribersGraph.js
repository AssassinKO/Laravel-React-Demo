import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { news } from '../../../../@fake-db/dashboards/news';

const SubscribersGraph = () => {
  const { newSubscribers } = news;
  return (
    <ResponsiveContainer width="100%" height={80}>
      <BarChart data={newSubscribers} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          itemStyle={{ color: '#6200EE' }}
          labelFormatter={function(value) {
            return `Month: ${value}`;
          }}
          cursor={false}
        />
        <XAxis dataKey="month" hide />
        <Bar dataKey="count" stackId="a" fill="#fff" barSize={6} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SubscribersGraph;
