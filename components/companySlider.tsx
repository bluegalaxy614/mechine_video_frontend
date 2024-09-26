"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; 
// Define the type for the individual slide
interface Slide {
  image: string;
  title: string;
}

// Define the props for the CompanySlider component
interface CompanySliderProps {
  slides: Slide[];
  dir: "ltr" | "rtl"; // Restrict the direction to either "ltr" or "rtl"
}

const CompanySlider: React.FC<CompanySliderProps> = ({ slides, dir }) => {
  return (
    <Splide
      options={{
        rewind: true,
        type: "loop",
        gap: "3rem",
        autoplay: true,
        direction: dir, // Use the `dir` prop to set the slider direction
        speed: 1000,
        arrows: false,
        pagination: false,
        // perPage: 7,
        interval: 1000,
        drag: false,
        easing: "ease",
        responsive: {
          0: {
            perPage: 1,
          },
          768: {
            perPage: 3,
          },
          1024: {
            perPage: 5,
          },
          1280: {
            perPage: 7,
          },
          1440: {
            perPage: 7,
          },
        }
      }}
      aria-label="Image Slider"
    >
      {slides.map((slide, index) => (
        <SplideSlide
          key={index}
          className="flex w-[220px] h-[120px] rounded-[30px] shadow-md my-[30px] justify-center items-center mx-[10px] border"
        >
          <div className="flex justify-center items-center w-[155px] h-[55px] overflow-hidden">
            <img
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