import React from 'react';
import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import data from '../data/data';

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
const CustomShapeBarChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <defs>
        <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
          <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Bar dataKey="uv" fill="url(#color1)" shape={<TriangleBar />} label />
    </BarChart>
  </ResponsiveContainer>
);

export default CustomShapeBarChart;
