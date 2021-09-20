import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import Box from '@material-ui/core/Box';
import { eCommerce } from '../../../../@fake-db';

const itemLabels = {
  sent: 'Sent',
  bounced: 'Bounced',
};

const EmailGraph = () => {
  const { totalEmails } = eCommerce;
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={totalEmails} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={({ active, label, payload }) => {
            return active ? (
              <Box color="#fff">
                <Box>Month: {label}</Box>
                {payload.map((row, index) => (
                  <Box key={index} mt={1}>
                    {itemLabels[row.name]} - {row.value}
                  </Box>
                ))}
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            background: '#FFA800',
            padding: '5px 8px',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        />
        <XAxis dataKey="month" hide />
        <Line dataKey="sent" type="monotone" dot={null} strokeWidth={3} stackId="2" stroke="#FFA800" />
        <Line dataKey="bounced" type="monotone" dot={null} strokeWidth={3} stackId="2" stroke="#F3E5CF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmailGraph;
