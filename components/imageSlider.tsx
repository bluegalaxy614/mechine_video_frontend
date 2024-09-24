"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

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
        rewind: true,
        perPage: 1,
        type: "loop",
        gap: "1rem",
        pagination: false,
        autoplay: true,
        arrows: false,
      }}
      aria-label="Image Slider"
    >
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative h-[483px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="!w-full object-cover"
            />
            <div className="absolute top-[50%] left-[10%] right-0 text-white p-4 w-[810px]">
              <h2 className="text-[72px] font-bold">{slide.title}</h2>
              <p className="text-[24px]">{slide.description}</p>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImageSlider;
