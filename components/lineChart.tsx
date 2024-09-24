"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ chartData }) => {
  return (
    <div className="relative flex w-full h-[545px]">
      <div className="absolute top-0 left-[61px] flex justify-center items-center gap-9">
        <img className="w-[39px] h-[39px]" src="/icons/icon-chart.png" alt="" />
        <p className="text-[16px] text-[#4291EF]">収益グラフ</p>
      </div>
      <div className="mx-auto mb-8">
        <Line
          width={1330}
          height={397}
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                // text: "収益グラフ",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
