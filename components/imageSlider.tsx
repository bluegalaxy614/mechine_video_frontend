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
        perPage: 1,
        type: "loop",
        pagination: false,
        autoplay: true,
        arrows: false,
      }}
      aria-label="Image Slider"
    >
      {slides.map((slide, index) => (
        <SplideSlide key={index} className="w-full h-[483px]">
          <div className="relative w-full"> {/* Maintains the aspect ratio */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full object-cover h-full"  // Ensures the image fills the container while keeping the aspect ratio
            />
            <div className="absolute top-[40%] left-[10%] right-0 text-white p-4 max-w-[810px]">
              <h2 className="text-[72px] font-bold">{slide.title}</h2>
              <p className="text-[24px] text-[#C0C0C0]">{slide.description}</p>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImageSlider;
