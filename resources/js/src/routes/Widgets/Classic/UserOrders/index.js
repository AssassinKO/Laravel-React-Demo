import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { classicWidget } from '../../../../@fake-db';

const DataChart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height={55}>
      <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" hide />
        <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
        <defs>
          <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
            <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="orders"
          type="monotone"
          strokeWidth={0}
          stackId="2"
          stroke="#4D95F3"
          fill="url(#color4)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const UserOrders = () => {
  const { orders } = classicWidget;

  return (
    <CmtCard>
      <CmtCardHeader title="Orders(293)" />
      <DataChart chartData={orders} />
    </CmtCard>
  );
};

export default UserOrders;
