import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import { makeStyles } from '@material-ui/styles';

import { crypto } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  tooltip: {
    position: 'relative',
    borderRadius: 6,
    padding: '4px 12px',
    backgroundColor: '#6dd1e7',
    color: theme.palette.common.white,
  },
}));

const EtheriumGraph = () => {
  const classes = useStyles();
  return (
    <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={112}>
      <AreaChart data={crypto.etherium} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? <div className={classes.tooltip}>${data.payload[0].payload.price}</div> : null;
          }}
        />
        <defs>
          <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1} />
            <stop offset="95%" stopColor="#09BCA7" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          dataKey="price"
          type="monotone"
          strokeWidth={0}
          stackId="2"
          stroke="#1ABBDE"
          fill="url(#color5)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default EtheriumGraph;
