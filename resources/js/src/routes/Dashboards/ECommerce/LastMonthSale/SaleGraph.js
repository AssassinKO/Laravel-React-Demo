import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import Box from '@material-ui/core/Box';
import { eCommerce } from '../../../../@fake-db';
import moment from 'moment';

const lastMonth = moment()
  .subtract(1, 'month')
  .format('MMM');

const SaleGraph = () => {
  const { lastMonthSaleStats } = eCommerce;
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={lastMonthSaleStats} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? (
              <Box color="#fff">{`${lastMonth} ${data.label}: $${data.payload[0].payload.value}`}</Box>
            ) : null;
          }}
          wrapperStyle={{
            background: '#4200FF',
            padding: '5px 8px',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        />
        <XAxis dataKey="date" hide />
        <Line dataKey="value" type="monotone" dot={null} strokeWidth={3} stackId="2" stroke="#4200FF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SaleGraph;
