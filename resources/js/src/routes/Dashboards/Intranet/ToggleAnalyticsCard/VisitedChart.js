import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import Box from '@material-ui/core/Box';

const VisitedChart = ({ data, color, bgColor }) => {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          cursor={false}
          content={data => {
            return data.payload[0] ? (
              <Box p={2}>
                <Box color="common.dark" component="p">
                  {data.payload[0].payload.label}:
                </Box>
                <Box>
                  <Box component="span" color={color}>
                    Value: {data.payload[0].payload.value}
                  </Box>
                  {', '}
                  <Box component="span" color="#C8372D">
                    Visits: {data.payload[0].payload.visits}
                  </Box>
                </Box>
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            background: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: 4,
            radius: 4,
            overflow: 'hidden',
            textAlign: 'left',
          }}
        />

        <defs>
          <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={bgColor} stopOpacity={1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={1} />
          </linearGradient>

          <linearGradient id="color4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C8372D" stopOpacity={1} />
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

        <Area
          dataKey="visits"
          type="monotone"
          strokeWidth={2}
          stackId="2"
          stroke="#F2E7FE"
          fill="url(#color4)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default VisitedChart;
