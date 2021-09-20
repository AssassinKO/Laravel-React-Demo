import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import JumboCard from '../../../../@jumbo/components/Common/JumboCard';
import { crm } from '../../../../@fake-db';

const useStyles = makeStyles(() => ({
  titleRoot: {
    textAlign: 'center',
  },
  dots: {
    height: 8,
    width: 8,
    borderRadius: '50%',
  },
}));

const TicketsStatus = () => {
  const classes = useStyles();
  return (
    <JumboCard
      title={
        <Typography component="div" variant="h4" className={classes.titleRoot}>
          Tickets by Status
        </Typography>
      }>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <text x="50%" className="h1" y="50%" textAnchor="middle" dominantBaseline="middle" />
          <Pie data={crm.ticketsStatus} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={80} fill="#8884d8">
            {crm.ticketsStatus.map((item, index) => (
              <Cell key={index} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
        {crm.ticketsStatus.map((item, index) => (
          <Box key={index} mr={2} mb={1} display="flex" alignItems="center">
            <Box
              mr={2}
              component="span"
              className={classes.dots}
              style={{
                backgroundColor: item.color,
              }}
            />
            <Box component="span" fontSize={12} color="text.secondary">
              {item.name}
            </Box>
          </Box>
        ))}
      </Box>
    </JumboCard>
  );
};

export default TicketsStatus;
