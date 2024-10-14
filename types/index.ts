import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface BoxImageProps {
  id: number;
  image: string;
  title: string;
  info: string;
  unit: string;
}

export interface CategoryButtonProps {
  id: string;
  name: string;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface Slide {
  image: string;
  title: string;
}

// Define the props for the CompanySlider component
export interface CompanySliderProps {
  slides: Slide[];
  dir: 'ltr' | 'rtl'; // Restrict the direction to either "ltr" or "rtl"
}

export interface FavVideoCardsProps {
  data: {
    title: string;
    img: string;
    categories: string[];
    describe: string;
    author: string;
    date: string;
    duration?: string | null;
  }[];
}

export interface ImageButtonProps {
  data: {
    icon: string;
    title: string;
    description?: string | null; // accept null or undefined
  };
}

export interface LineChartProps {
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

export interface NewsCardsProps {
  data: {
    title: string;
    content: string;
    date: string;
  }[];
}

export interface category {
  main: string;
  sub: string;
}

export interface subCategoryButtonProps {
  id: string;
  name: string;
  category: category;
  setSelectedSubCategories: React.Dispatch<React.SetStateAction<category[]>>;
}

export interface UserCardsProps {
  data: {
    img: string;
    name: string;
    number: string;
  }[];
}
export interface VideoCardsProps {
  data: {
    _id: string;
    title: String,
    description: String,
    videoDuration: String,
    videoCode: String,
    machineName: String,
    format: String,
    manufacturer: String,
    selectedCategory: String,
    selectedSubCategory: String,
    thumbnailsUrl: string,
    videoUrl: string,
    posterId: string,
    posterName: string,
    uploadDate: string,
    views: number
    status: string,
  }[];
}

export interface Video {
  _id: string;
  title: string,
  description: string,
  videoDuration: string,
  videoCode: string,
  machineName: string,
  format: string,
  manufacturer: string,
  selectedCategory: string,
  selectedSubCategory: string,
  thumbnailsUrl: string,
  videoUrl: string,
  posterId: string,
  posterName: string,
  uploadDate: string,
  views: number,
  status: string,
}