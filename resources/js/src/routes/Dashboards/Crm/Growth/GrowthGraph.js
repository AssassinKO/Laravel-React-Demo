import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import Box from '@material-ui/core/Box';

import { crypto } from '../../../../@fake-db';

const GrowthGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={117}>
      <AreaChart data={crypto.growth} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? (
              <Box component="span" p={4} color="#fff">
                {data.payload[0].payload.price}
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            background: '#E59D1E',
            borderRadius: 10,
            radius: 10,
            overflow: 'hidden',
          }}
        />
        <defs>
          <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
            <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="price"
          type="monotone"
          strokeWidth={0}
          stackId="2"
          stroke="#6200EE"
          fill="url(#color3)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GrowthGraph;
