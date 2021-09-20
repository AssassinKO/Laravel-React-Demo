import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import data from '../data/data';

const SpecifiedDomainRadarChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart outerRadius={150} data={data}>
      <Radar name="Lily" dataKey="B" stroke="#19A6D2" fill="#19A6D2" fillOpacity={0.6} />
      <Radar name="Mike" dataKey="A" stroke="#6200EE" fill="#6200EE" fillOpacity={0.6} />
      <PolarGrid />
      <Legend />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
    </RadarChart>
  </ResponsiveContainer>
);

export default SpecifiedDomainRadarChart;
