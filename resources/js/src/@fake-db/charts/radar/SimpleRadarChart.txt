import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import data from '../data/data';

const SimpleRadarChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart outerRadius={150} data={data}>
      <Radar name="Mike" dataKey="A" stroke="#6200EE" fill="#6200EE" fillOpacity={0.6} />
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
    </RadarChart>
  </ResponsiveContainer>
);

export default SimpleRadarChart;
