import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import Box from '@material-ui/core/Box';
import { eCommerce } from '../../../../@fake-db';

const RevenueGraph = () => {
  const { totalRevenue } = eCommerce;
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={totalRevenue} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? <Box color="#fff">{`${data.label}: $${data.payload[0].value}`}</Box> : null;
          }}
          wrapperStyle={{
            background: '#29CF6B',
            padding: '5px 8px',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        />
        <XAxis dataKey="month" hide />
        <Line dataKey="amount" type="monotone" dot={null} strokeWidth={3} stackId="2" stroke="#29CF6B" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueGraph;
