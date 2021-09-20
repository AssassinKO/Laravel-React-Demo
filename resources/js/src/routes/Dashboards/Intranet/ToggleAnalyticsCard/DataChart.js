import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import Box from '@material-ui/core/Box';

const DataChart = ({ data, color, bgColor }) => {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? (
              <Box component="span" p={4} color="#fff">
                {data.payload[0].payload.label}: {data.payload[0].payload.value}
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            padding: 8,
            background: color,
            borderRadius: 4,
            radius: 4,
            overflow: 'hidden',
          }}
        />

        <defs>
          <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={bgColor} stopOpacity={1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area
          dataKey="value"
          type="monotone"
          strokeWidth={2}
          stackId="2"
          stroke={color}
          fill="url(#color3)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DataChart;
