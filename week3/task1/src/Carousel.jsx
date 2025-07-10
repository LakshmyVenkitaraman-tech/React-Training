import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";


const images = [img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-[750px] h-[750px] rounded-lg overflow-hidden shadow-lg">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-10 hover:bg-gray-200"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-10 hover:bg-gray-200"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
