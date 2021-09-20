import React from 'react';

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  headerChartRoot: {
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
    backgroundColor: theme.palette.primary.main,
    paddingTop: 90,
    margin: '-88px -15px 0 -15px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 100,
      marginTop: '-120px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: -50,
      marginRight: -50,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: -65,
      marginRight: -65,
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: -88,
      marginRight: -88,
    },
  },
}));

const HeaderChartComponent = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerChartRoot}>
      <ResponsiveContainer width="100%" height={270}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" hide />
          <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
          <Area type="monotone" dataKey="Expanse" stackId="1" stroke="#985EFF" fillOpacity={1} fill="#985EFF" />
          <Area type="monotone" dataKey="Income" stackId="1" stroke="#BB86FC" fillOpacity={1} fill="#BB86FC" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeaderChartComponent;
