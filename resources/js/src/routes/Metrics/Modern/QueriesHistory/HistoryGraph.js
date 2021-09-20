import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const HistoryGraph = ({ revenueHistory }) => {
  return (
    <ResponsiveContainer width="100%" height={45}>
      <BarChart data={revenueHistory} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
        <XAxis dataKey="month" hide />
        <Bar dataKey="amt" stackId="a" fill="#6200EE" barSize={6} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistoryGraph;
