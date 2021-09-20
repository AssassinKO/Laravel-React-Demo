import React from 'react';
import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const ProductsChart = ({ data }) => {
  const graphData = data.map(item => {
    return { name: item.name, color: item.colorCode, ...item.sales_data };
  });

  const customizedLabel = props => {
    const { x, y, value } = props;
    return (
      <text x={x + 15} y={y} dy={-20} textAnchor="middle">
        {value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={268}>
      <BarChart barSize={35} data={graphData} margin={{ top: 35, right: 0, left: 0, bottom: -8 }}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis hide />
        <Bar dataKey="sold_qty">
          <LabelList dataKey="sold_qty" content={(x, y, value) => customizedLabel(x, y, value)} />
          {graphData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProductsChart;
