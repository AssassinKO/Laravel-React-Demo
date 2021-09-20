import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const ProjectWorkedGraph = ({ data, color, backgroundColor }) => {
  return (
    <ResponsiveContainer width="100%" height={294}>
      <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" hide />
        <Tooltip labelStyle={{ color: 'black' }} cursor={false} />

        <defs>
          <linearGradient id="worked-hours" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor={backgroundColor} stopOpacity={1} />
            <stop offset="90%" stopColor="#ffffff" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area type="monotone" dataKey="amount" strokeWidth={2} stroke={color} fill="url(#worked-hours)" fillOpacity={1} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ProjectWorkedGraph;
