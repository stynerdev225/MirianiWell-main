"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface HealthChartProps {
  data: Array<{
    date: string;
    value: number;
    target?: number;
  }>;
  title: string;
  dataKey: string;
  color?: string;
}

export function HealthChart({
  data,
  title,
  dataKey,
  color = "#8884d8",
}: HealthChartProps) {
  return (
    <div className="w-full h-64 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
          />
          {data[0]?.target && (
            <Line
              type="monotone"
              dataKey="target"
              stroke="#ff7300"
              strokeDasharray="5 5"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
