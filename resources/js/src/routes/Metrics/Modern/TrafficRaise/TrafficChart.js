import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const TrafficChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={75}>
      <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
        <XAxis dataKey="month" hide />
        <Line type="monotone" dataKey="traffic" strokeWidth={3} stroke="#8DCD03" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrafficChart;
