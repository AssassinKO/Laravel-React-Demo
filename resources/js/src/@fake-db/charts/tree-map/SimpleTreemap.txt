import React from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';
import data from '../data/data';

const SimpleTreemap = () => (
  <ResponsiveContainer width="100%" height={200}>
    <Treemap data={data} dataKey="size" ratio={4 / 3} stroke="#fff" fill="#6200EE" />
  </ResponsiveContainer>
);

export default SimpleTreemap;
