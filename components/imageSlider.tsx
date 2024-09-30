'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';

type Slide = {
  image: string;
  title: string;
  description: string;
};

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  return (
    <Splide
      options={{
        perPage: 1,
        type: 'loop',
        pagination: false,
        autoplay: true,
        arrows: false,
      }}
      aria-label="Image Slider"
    >
      {slides.map((slide, index) => (
        <SplideSlide
          key={index}
          className="relative w-full lg:h-[483px] md:h-[483px] sm:h-[400px] xsm:h-[300px] from-transparent"
        >
          <div className="w-full">
            {' '}
            {/* Maintains the aspect ratio */}
            <Image
              fill
              src={slide.image}
              alt={slide.title}
              className="w-full object-cover h-full"
            />
          </div>
          <div className="absolute top-[40%] lg:left-[10%] md:left-[10%] sm:left-[5%] xsm:left-3 right-0 text-white p-4 lg:w-[820px] md:w-[820px] sm:max-w-[630px] xsm:max-w-[400px]">
            <h2
              className="lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #FFFFFF, #4291EF, #F5F5F5, #4291EF, #FFFFFF)',
              }}
            >
              {slide.title}
            </h2>

            <p className="lg:text-[24px] md:text-[20px] sm:text-[18px] xsm:text-[14px] text-[#C0C0C0] my-2">
              {slide.description}
            </p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImageSlider;
