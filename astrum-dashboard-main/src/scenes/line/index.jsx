import React from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import { mockLineData } from "../../data/mockData";



const Line = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={mockLineData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="mileStats" stroke="#2884ff" fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Line;



    // <Box m="20px">
    //   <Header title="Line Chart" subtitle="Simple Line Chart" />
    //   <Box height="75vh">
    //     <h1>dfwffwf</h1>
    //   </Box>
    // </Box>