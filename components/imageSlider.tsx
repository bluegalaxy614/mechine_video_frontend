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
          className="relative w-full h-[483px] from-transparent"
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
          <div className="absolute top-[40%] left-[10%] right-0 text-white p-4 lg:w-[810px] md:w-[810px] sm:w-[600px] xsm:w-[400px]">
            <h2
              className="lg:text-6xl md:text-5xl sm:text-4xl xsm:text-4xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #FFFFFF, #4291EF, #F5F5F5, #4291EF, #FFFFFF)',
              }}
            >
              {slide.title}
            </h2>

            <p className="lg:text-[24px] md:text-[20px] sm:text-[18px] xsm:text-[16px] text-[#C0C0C0] my-2">
              {slide.description}
            </p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImageSlider;
