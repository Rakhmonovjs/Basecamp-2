import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";
import mockchartData from "../../data/mockchartData";



const Chart = () => {
  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={mockchartData}
        margin={{ top: 10, right: 30, left: 20, bottom: -10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#ddd" />

        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
        <Area
          type="monotone"
          dataKey="qwasar"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="docode"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
