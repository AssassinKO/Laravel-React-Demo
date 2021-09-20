import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import Box from '@material-ui/core/Box';
import { crypto } from '../../../../@fake-db';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  tooltip: {
    position: 'relative',
    borderRadius: 6,
    padding: '4px 12px',
    backgroundColor: '#E59D1E',
    color: theme.palette.common.white,
  },
}));

const RippleGraph = () => {
  const classes = useStyles();
  return (
    <ResponsiveContainer width="100%" height={112}>
      <AreaChart data={crypto.ripple} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? <Box className={classes.tooltip}>${data.payload[0].payload.price}</Box> : null;
          }}
        />
        <defs>
          <linearGradient id="color12" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F39711" stopOpacity={1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="price"
          type="monotone"
          strokeWidth={2}
          stackId="2"
          stroke="#F39711"
          fill="url(#color12)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RippleGraph;
