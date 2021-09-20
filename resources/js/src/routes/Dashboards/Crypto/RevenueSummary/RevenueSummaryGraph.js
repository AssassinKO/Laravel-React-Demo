import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { crypto } from '../../../../@fake-db';
import { Box } from '@material-ui/core';
import Zoom from '../../../../@coremat/CmtTransitions/Zoom';

const RevenueSummaryGraph = ({ value }) => {
  let incomeColor = value === 0 ? '#5F33C2' : '#FF8C00';
  let expanseColor = value === 1 ? '#5F33C2' : '#FF8C00';

  return (
    <React.Fragment>
      <Zoom in={value === 0} direction="up">
        <Box>
          <ResponsiveContainer width="100%" height={value === 0 ? 205 : 0}>
            <AreaChart data={crypto.revenueSummary} margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
              <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
              <XAxis dataKey="month" axisLine={false} />
              <Area dataKey="expense" stackId="2" stroke={expanseColor} fillOpacity={1} fill={expanseColor} />
              <Area dataKey="income" stackId="1" stroke={incomeColor} fillOpacity={1} fill={incomeColor} />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Zoom>
      <Zoom in={value === 1} direction="down">
        <Box>
          <ResponsiveContainer width="100%" height={value === 1 ? 205 : 0}>
            <AreaChart data={crypto.revenueSummary} margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
              <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
              <XAxis dataKey="month" axisLine={false} />
              <Area dataKey="expense" stackId="2" stroke={expanseColor} fillOpacity={1} fill={expanseColor} />
              <Area dataKey="income" stackId="1" stroke={incomeColor} fillOpacity={1} fill={incomeColor} />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Zoom>
    </React.Fragment>
  );
};

export default RevenueSummaryGraph;
