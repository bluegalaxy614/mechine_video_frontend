'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import Image from 'next/image';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);
import { LineChartProps } from '@/types';

const LineChart: React.FC<LineChartProps> = ({ chartData, options }) => {
  return (
    <div className="hidden sm:block relative flex w-full lg:h-[545px] md:h-[450px] sm:h-[350px] mx-auto my-8 w-full border border-gray-300 shadow-lg rounded-lg p-[30px] pt-[60px] pl-[40px]">
      <div className="absolute top-3 left-[30px] flex justify-center items-center gap-9">
        <Image
          width={39}
          height={39}
          src="/icons/icon-chart.png"
          alt="chart icon"
        />
        <p className="text-[16px] text-[#4291EF]">収益グラフ</p>
      </div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
              position: 'top',
              labels: {
                color: '#FFFFFF',
                boxWidth: 20,
              },
            },
            title: {
              display: false,
              text: '収益グラフ',
              color: '#4291EF', // Optional: Title color
              font: {
                size: 18,
                family: 'Arial', // Optional: Customize font for title
              },
            },
            tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(0,0,0,0.8)', // Tooltip background color
              titleColor: '#FFFFFF', // Optional: Tooltip title color
              bodyColor: '#FFFFFF', // Optional: Tooltip text color
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Optional: Hide grid lines on X-axis
              },
              ticks: {
                color: '#4291EF', // Optional: X-axis tick color
              },
            },
            y: {
              grid: {
                color: '#E5E7EB', // Optional: Grid color for Y-axis
              },
              ticks: {
                color: '#4291EF', // Optional: Y-axis tick color
              },
            },
          },
          ...options, // Spread in any additional options passed
        }}
      />
    </div>
  );
};

export default LineChart;
