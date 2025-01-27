"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type ImageSliderProps = {
  index: number;
  closeSlider: () => void
}

const ImageSlider = ({ index, closeSlider }: ImageSliderProps) => {
  const data = [
    "/bg0.jpg",
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg3.jpg",
    "/bg4.jpg",
    "/bg5.jpg",
  ];

  const [imgIndex, setImgIndex] = useState(index);

  const showNext = () => {
    setImgIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrev = () => {
    setImgIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="absolute inset-0 w-full h-screen bg-black">
      <div className="w-full h-full flex items-center overflow-hidden relative">
        <button className="z-40 text-primary p-3 rounded-full bg-secondary fixed top-5 right-5" onClick={closeSlider}>
          <X size={20}/>
        </button>
        <button
          className="z-20 fixed left-0 top-0 bottom-0 w-20 flex justify-center items-center text-primary disabled:cursor-not-allowed"
          onClick={showPrev}
          disabled={imgIndex === 0}
        >
          <ChevronLeft />
        </button>
        {data.map((d) => (
          <div
            key={d}
            className="w-full h-full flex-shrink-0 flex-grow flex justify-center items-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${100 * imgIndex}%)` }}
          >
            <Image src={d} fill alt={`image-${imgIndex}`} className="w-full h-full bg-center bg-cover" />
          </div>
        ))}
        <button
          className="z-20 fixed right-0 top-0 bottom-0 w-20 flex justify-center items-center text-primary disabled:cursor-not-allowed"
          onClick={showNext}
          disabled={imgIndex === data.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
export default ImageSlider;
