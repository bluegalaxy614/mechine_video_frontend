'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
// Define the type for the individual slide
interface Slide {
  image: string;
  title: string;
}

// Define the props for the CompanySlider component
interface CompanySliderProps {
  slides: Slide[];
  dir: 'ltr' | 'rtl'; // Restrict the direction to either "ltr" or "rtl"
}

const CompanySlider: React.FC<CompanySliderProps> = ({ slides, dir }) => {
  return (
    <Splide
      options={{
        rewind: true,
        type: 'loop',
        autoplay: true,
        direction: dir,
        gap: '20px',
        speed: 3000,
        arrows: false,
        pagination: false,
        perPage: 7,
        perMove: 1,
        interval: 3000,
        easing: 'linear',
        pauseOnHover: true,
        breakpoints: {
          1200: {
            perPage: 5,
          },
          768: {
            perPage: 3,
          },
          480: {
            perPage: 2,
          },
        },
      }}
      aria-label="Image Slider"
    >
      {slides.map((slide, index) => (
        <SplideSlide
          key={index}
          className="flex w-[220px] h-[120px] rounded-[30px] my-[30px] justify-center items-center mx-[10px] border border-gray-200"
        >
          <div className="flex justify-center items-center">
            <Image
              width={155}
              height={55}
              src={slide.image}
              alt={slide.title}
              className="w-full object-cover mx-auto"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CompanySlider;
