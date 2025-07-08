import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#3b82f6', '#22c55e'];

export default function UserRatioPieChart({ data }: any) {
  return (
    <ResponsiveContainer width='100%' height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={80}
          innerRadius={40}
          label
        >
          {data.map((_: any, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign='bottom' height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
}
