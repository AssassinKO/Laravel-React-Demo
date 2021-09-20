import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import { makeStyles } from '@material-ui/styles';

import { crypto } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  tooltip: {
    position: 'relative',
    borderRadius: 6,
    padding: '4px 12px',
    backgroundColor: '#19A6D2',
    color: theme.palette.common.white,
  },
}));

const LitecoinGraph = () => {
  const classes = useStyles();
  return (
    <ResponsiveContainer width="100%" height={112}>
      <AreaChart data={crypto.litCoin} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? <div className={classes.tooltip}>${data.payload[0].payload.price}</div> : null;
          }}
        />
        <defs>
          <linearGradient id="color10" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#19A6D2" stopOpacity={1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="price" strokeWidth={2} stroke="#19A6D2" fill="url(#color10)" fillOpacity={1} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LitecoinGraph;
