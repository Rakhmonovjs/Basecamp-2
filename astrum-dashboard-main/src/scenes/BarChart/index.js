import React from "react";
import { VictoryPie } from "victory-pie";
import { mockBarData } from "../../data/mockData";


const BarChart = () => {
    return (
        <div>
            <VictoryPie width={200} height={200} 
            data={mockBarData}
            colorScale={["blue", "yellow", "green"]}
            radius={50}/>
        </div>
    );
};

export default BarChart;