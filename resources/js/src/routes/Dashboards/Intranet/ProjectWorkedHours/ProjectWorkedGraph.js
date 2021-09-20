import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const ProjectWorkedGraph = ({ data, color }) => {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" />
        <Tooltip labelStyle={{ color: 'black' }} cursor={false} />
        <Bar dataKey="deals" stackId="a" fill={color} barSize={8} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProjectWorkedGraph;
