import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  tooltip: {
    position: 'relative',
    borderRadius: 6,
    padding: '4px 8px',
    backgroundColor: '#8d46ef',
    color: theme.palette.common.white,
  },
}));

const HistoryGraph = ({ revenueHistory }) => {
  const classes = useStyles();

  return (
    <ResponsiveContainer width="100%" height={56}>
      <BarChart data={revenueHistory} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? (
              <div className={classes.tooltip}>
                <div>Revenue : ${data.payload[0].payload.revenue}</div>
                <div>Profit : ${data.payload[0].payload.profit}</div>
              </div>
            ) : null;
          }}
        />
        <XAxis dataKey="month" hide />
        <Bar dataKey="revenue" stackId="a" fill="#6200EE" barSize={6} />
        <Bar dataKey="profit" stackId="a" fill="#00B3A6" barSize={6} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistoryGraph;
