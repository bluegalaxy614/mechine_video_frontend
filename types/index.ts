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
export interface Message {
  userId: string;
  userName: string;
  userAvatar: string;
  messages: {
    from: string;
    content: string;
    date: string;
  }[];
  unread: number;
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

export interface CompanySliderProps {
  slides: Slide[];
  dir: 'ltr' | 'rtl';
}

export interface ImageButtonProps {
  data: {
    icon: string;
    title: string;
    description?: string | null;
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
      fill?: boolean | string;
      tension?: number;
      borderDash?: number[];
      borderWidth?: number;
      pointStyle?: string | HTMLImageElement | HTMLCanvasElement;
      pointRadius?: number;
    }[];
  };
  options?: {
    responsive: boolean;
    plugins?: {
      legend?: {
        position?: 'top' | 'left' | 'right' | 'bottom';
        labels?: {
          color?: string;
          boxWidth?: number;
        };
      };
      title?: {
        display: boolean;
        text: string;
        color?: string;
        font?: {
          size?: number;
          family?: string;
        };
      };
      tooltip?: {
        enabled?: boolean;
        mode?: 'index' | 'nearest';
        intersect?: boolean;
        backgroundColor?: string;
        titleColor?: string;
        bodyColor?: string;
      };
    };
    scales?: {
      x: {
        grid?: {
          display: boolean;
          color?: string;
        };
        ticks?: {
          color?: string;
        };
      };
      y: {
        grid?: {
          display: boolean;
          color?: string;
        };
        ticks?: {
          color?: string;
        };
      };
    };
    maintainAspectRatio?: boolean;
    interaction?: {
      mode?: 'nearest' | 'index';
      intersect?: boolean;
    };
    animation?: {
      duration?: number;
    };
    hover?: {
      mode?: 'nearest' | 'index';
      intersect?: boolean;
    };
    elements?: {
      line?: {
        tension?: number;
      };
      point?: {
        radius?: number;
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

export interface subCategoryButtonProps {
  id: string;
  name: string;
  setSelectedSubCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface UserCardsProps {
  data: {
    img: string;
    name: string;
    uploads: string;
  }[];
}
export interface VideoCardsProps {
  data: {
    _id: string;
    title: String;
    description: String;
    videoDuration: String;
    videoCode: String;
    machineName: String;
    format: String;
    manufacturer: String;
    selectedCategory: String;
    selectedSubCategory: String;
    thumbnailsUrl: string;
    videoUrl: string;
    posterId: string;
    posterName: string;
    uploadDate: string;
    views: number;
    status: string;
  }[];
}

export interface Video {
  _id: string;
  title: string;
  description: string;
  videoDuration: string;
  videoCode: string;
  machineName: string;
  format: string;
  manufacturer: string;
  selectedCategory: string;
  selectedSubCategory: string;
  thumbnailsUrl: string;
  videoUrl: string;
  posterId: string;
  posterName: string;
  uploadDate: string;
  views: number;
  status: string;
}
