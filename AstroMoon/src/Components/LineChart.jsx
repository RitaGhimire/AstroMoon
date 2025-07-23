// LineChart.jsx
import React from 'react';
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function LineChart({ data }) {
  // Convert "12 - 15" to average like 13.5
  const chartData = data
    .map((breed) => {
      const range = breed.life_span?.split(' - ');
      if (!range || range.length !== 2) return null;

      const avg =
        (parseInt(range[0]) + parseInt(range[1])) / 2;

      return {
        name: breed.name,
        lifespan: avg,
      };
    })
    .filter(Boolean); // removes any null entries

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 style={{ textAlign: 'center' }}>Average Lifespan by Cat Breed</h2>
      <ResponsiveContainer>
        <ReLineChart
          data={chartData.slice(0, 12)}
          margin={{ top: 20, bottom: 60 }}
        >
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis
            label={{
              value: 'Years',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="lifespan"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
