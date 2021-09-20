import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box, List, ListItem, Typography } from '@material-ui/core';

const data = [
  { month: '2015.01', a: 4000, b: 2400, c: 2400 },
  { month: '2015.02', a: 3000, b: 1398, c: 2210 },
  { month: '2015.03', a: 2000, b: 9800, c: 2290 },
  { month: '2015.04', a: 2780, b: 3908, c: 2000 },
  { month: '2015.05', a: 1890, b: 4800, c: 2181 },
  { month: '2015.06', a: 2390, b: 3800, c: 2500 },
  { month: '2015.07', a: 3490, b: 4300, c: 2100 },
];

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};
const renderTooltipContent = o => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <Box>
      <Typography>{`${label} (Total: ${total})`}</Typography>
      <List className="list">
        {payload.map((entry, index) => (
          <ListItem key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
const PercentAreaChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={data} stackOffset="expand" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="month" />
      <YAxis tickFormatter={toPercent} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip content={renderTooltipContent} />
      <defs>
        <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#E59D1E" stopOpacity={1} />
          <stop offset="95%" stopColor="#E59D1E" stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
          <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
          <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="a" stackId="1" stroke="" fill="url(#color1)" fillOpacity={1} />
      <Area type="monotone" dataKey="b" stackId="1" stroke="" fill="url(#color2)" fillOpacity={1} />
      <Area type="monotone" dataKey="c" stackId="1" stroke="" fill="url(#color3)" fillOpacity={1} />
    </AreaChart>
  </ResponsiveContainer>
);

export default PercentAreaChart;
