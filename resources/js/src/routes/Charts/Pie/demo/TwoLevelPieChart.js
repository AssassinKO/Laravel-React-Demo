import React from 'react';
import PropTypes from 'prop-types';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { data01, data02 } from '../data/data';

const TwoLevelPieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie dataKey="value" data={data01} outerRadius={60} fill="#6200EE" />
      <Pie dataKey="value" data={data02} innerRadius={70} outerRadius={90} fill="#19A6D2" label />
    </PieChart>
  </ResponsiveContainer>
);

TwoLevelPieChart.propTypes = {
  dataKey: PropTypes.node,
};
export default TwoLevelPieChart;
