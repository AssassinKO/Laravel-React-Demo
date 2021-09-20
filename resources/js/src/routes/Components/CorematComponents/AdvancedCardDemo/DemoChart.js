import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'FireFox',
    users: 90,
    visits: 80,
  },
  {
    name: 'Chrome',
    users: 110,
    visits: 70,
  },
  {
    name: 'Safari',
    users: 145,
    visits: 73,
  },
  {
    name: 'Edge',
    users: 75,
    visits: 60,
  },
  {
    name: 'Opera',
    users: 55,
    visits: 10,
  },
];

const DemoChart = () => (
  <ResponsiveContainer width="100%" height={120}>
    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
      <Area type="monotone" dataKey="users" stackId="1" stroke="#9BE7FD" fillOpacity={1} fill="#6200EE" />
      <Area type="monotone" dataKey="visits" stackId="2" stroke="#0795F4" fillOpacity={1} fill="#BB86FC" />
    </AreaChart>
  </ResponsiveContainer>
);

export default DemoChart;
