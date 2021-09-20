import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import Box from '@material-ui/core/Box';
import { news } from '../../../../@fake-db/dashboards/news';

const ArticlesGraph = () => {
  const { newsArticles } = news;
  return (
    <ResponsiveContainer width="100%" height={80}>
      <AreaChart data={newsArticles} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={data => {
            return data.payload[0] ? <Box color="#fff">{`${data.label}: ${data.payload[0].payload.count}`}</Box> : null;
          }}
          wrapperStyle={{
            background: '#00C4B4',
            padding: '5px 8px',
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid #fff',
          }}
        />
        <XAxis dataKey="month" hide />
        <Area dataKey="count" type="monotone" strokeWidth={3} stackId="2" stroke="#FFf" fill="#0DC7B8" fillOpacity={1} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ArticlesGraph;
