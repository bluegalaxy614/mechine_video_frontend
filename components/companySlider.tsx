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
        gap: '3rem',
        autoplay: true,
        direction: dir, // Use the `dir` prop to set the slider direction
        speed: 5000,
        arrows: false,
        pagination: false,
        perPage: 7,
        perMove: 1,
        interval: 10,
        easing: 'linear',
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
          className="flex w-[220px] h-[120px] rounded-[30px] shadow-md my-[30px] justify-center items-center mx-[10px] border"
        >
          <div className="flex justify-center items-center w-[155px] h-[55px] overflow-hidden">
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
