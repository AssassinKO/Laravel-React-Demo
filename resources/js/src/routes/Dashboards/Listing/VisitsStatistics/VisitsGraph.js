import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import Box from '@material-ui/core/Box';
import { statisticsGraphData } from '../../../../@fake-db';

const VisitsGraph = () => {
  return (
    <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={95}>
      <AreaChart data={statisticsGraphData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
            background: '#5BA6D9',
            borderRadius: 10,
            radius: 10,
            overflow: 'hidden',
          }}
        />
        <defs>
          <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="#3f51b5" stopOpacity={1} />
            <stop offset="95%" stopColor="#1fb6fc" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area dataKey="price" strokeWidth={2} stroke="#B65BC4" fill="#9935A9" fillOpacity={1} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default VisitsGraph;
