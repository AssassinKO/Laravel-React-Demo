import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { crm } from '../../../../@fake-db';

const SiteVisitsGraph = () => (
  <ResponsiveContainer width="100%" height={120}>
    <AreaChart data={crm.siteVisits} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <Tooltip
        labelStyle={{ color: 'black' }}
        itemStyle={{ color: '#0795F4' }}
        labelFormatter={function(value) {
          return `Month: ${value}`;
        }}
        cursor={false}
      />

      <XAxis dataKey="name" hide />
      <Area type="monotone" dataKey="queries" stackId="1" stroke="#0795F4" fillOpacity={1} fill="#0795F4" />
      <Area type="monotone" dataKey="visits" stackId="1" stroke="#9BE7FD" fillOpacity={1} fill="#9BE7FD" />
    </AreaChart>
  </ResponsiveContainer>
);

export default SiteVisitsGraph;
