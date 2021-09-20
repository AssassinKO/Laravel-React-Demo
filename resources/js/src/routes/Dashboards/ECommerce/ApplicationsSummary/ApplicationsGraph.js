import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  customTooltip: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    padding: 5,
  },
}));

const ApplicationsGraph = ({ pieData, colors }) => {
  const classes = useStyles();
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <Box className={classes.customTooltip}>
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </Box>
      );
    }
    return null;
  };
  return (
    <PieChart width={194} height={194}>
      <Pie
        data={pieData}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        isAnimationActive={true}
        outerRadius={95}
        fill="#8884d8">
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
};

export default ApplicationsGraph;
