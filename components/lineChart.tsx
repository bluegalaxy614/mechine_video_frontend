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
  Filler, // For filling areas below the line (optional)
} from 'chart.js';
import Image from 'next/image';

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Optional if using fill properties in datasets
);

// Extend the props to allow all props available for react-chartjs-2's Line component
interface LineChartProps {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      fill?: boolean | string; // Optional, for area filling
      tension?: number; // Optional, controls curve tension between points
      borderDash?: number[]; // Optional, for dashed lines
      borderWidth?: number; // Optional, thickness of line
      pointStyle?: string | HTMLImageElement | HTMLCanvasElement; // Optional, to change point style
      pointRadius?: number; // Optional, controls the size of data points
    }[];
  };
  options?: {
    responsive: boolean;
    plugins?: {
      legend?: {
        position?: 'top' | 'left' | 'right' | 'bottom';
        labels?: {
          color?: string; // Color of the legend labels
          boxWidth?: number; // Size of the box around each legend item
        };
      };
      title?: {
        display: boolean;
        text: string;
        color?: string; // Optional title color
        font?: {
          size?: number;
          family?: string;
        };
      };
      tooltip?: {
        enabled?: boolean;
        mode?: 'index' | 'nearest';
        intersect?: boolean;
        backgroundColor?: string; // Tooltip background color
        titleColor?: string; // Tooltip title color
        bodyColor?: string; // Tooltip body text color
      };
    };
    scales?: {
      x: {
        grid?: {
          display: boolean;
          color?: string; // Grid color
        };
        ticks?: {
          color?: string; // Ticks color for X-axis
        };
      };
      y: {
        grid?: {
          display: boolean;
          color?: string; // Grid color
        };
        ticks?: {
          color?: string; // Ticks color for Y-axis
        };
      };
    };
    maintainAspectRatio?: boolean; // Option to maintain aspect ratio
    interaction?: {
      mode?: 'nearest' | 'index';
      intersect?: boolean;
    };
    animation?: {
      duration?: number; // Controls animation duration
    };
    hover?: {
      mode?: 'nearest' | 'index';
      intersect?: boolean;
    };
    elements?: {
      line?: {
        tension?: number; // Option for line tension (curves between points)
      };
      point?: {
        radius?: number; // Point radius
      };
    };
  };
}

const LineChart: React.FC<LineChartProps> = ({ chartData, options }) => {
  return (
    <div className="relative flex w-full h-[545px] mx-auto my-8 w-full border border-gray-300 shadow-lg rounded-lg p-[30px] pt-[60px] pl-[40px]">
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
