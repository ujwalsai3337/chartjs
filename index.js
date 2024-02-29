
import './index.css';
import React from "react";
import { Pie,Line} from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";

function Body({ chartData }) {
  return (
    <div className='chart'>
        <Line data={chartData} />
        <Pie data={chartData} />
  </div>);
}

export default Body;