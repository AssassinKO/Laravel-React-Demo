import React from 'react';
import { CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import { data01, data02 } from '../data/data';

const ThreeDimScatterChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey={'x'} name="stature" unit="cm" />
      <YAxis dataKey={'y'} name="weight" unit="kg" />
      <ZAxis dataKey={'z'} range={[60, 400]} name="score" unit="km" />
      <CartesianGrid />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="A school" data={data01} fill="#6200EE" shape="star" />
      <Scatter name="B school" data={data02} fill="#19A6D2" shape="triangle" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default ThreeDimScatterChart;
