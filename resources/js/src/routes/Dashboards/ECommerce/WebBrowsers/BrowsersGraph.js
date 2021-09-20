import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import Box from '@material-ui/core/Box';

const BrowsersGraph = ({ browserData, color }) => {
  return (
    <ResponsiveContainer width="100%" height={50}>
      <AreaChart data={browserData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? (
              <Box component="span" p={4} color="#fff">
                {data.payload[0].payload.user}
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            background: color,
            borderRadius: 10,
            radius: 10,
            overflow: 'hidden',
          }}
        />
        <Area dataKey="user" type="monotone" strokeWidth={2} stackId="2" stroke={color} fillOpacity={0} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BrowsersGraph;
