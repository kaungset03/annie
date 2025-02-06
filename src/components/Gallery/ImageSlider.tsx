"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type ImageSliderProps = {
  index: number;
  closeSlider: () => void;
};

const ImageSlider = ({ index, closeSlider }: ImageSliderProps) => {
  const data = [
    "/bg0.webp",
    "/bg1.webp",
    "/bg2.webp",
    "/bg3.webp",
    "/bg4.webp",
    "/bg5.webp",
  ];

  const [imgIndex, setImgIndex] = useState(index);

  const showNext = useCallback(() => {
    if (imgIndex === data.length - 1) {
      return;
    } else {
      setImgIndex((index) => index + 1);
    }
  }, [data.length, imgIndex]);

  const showPrev = useCallback(() => {
    if (imgIndex === 0) {
      return;
    } else {
      setImgIndex((index) => index - 1);
    }
  }, [imgIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "Escape") {
        closeSlider();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeSlider, showNext, showPrev]);

  return (
    <div className="absolute inset-0 w-full h-screen bg-black z-50">
      <div className="w-full h-full flex items-center overflow-hidden relative">
        <button
          className="z-40 text-primary p-3 rounded-full border border-secondary fixed top-5 right-5"
          onClick={closeSlider}
        >
          <X size={18} />
        </button>
        <button
          className="z-20 fixed left-0 top-0 bottom-0 w-20 flex justify-center items-center text-primary bg-transparent hover:bg-slate-200/10 hover:text-secondary transition-colors duration-300 ease-in-out disabled:cursor-not-allowed"
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
            <Image
              src={d}
              fill
              alt={`image-${imgIndex}`}
              className="w-full h-full bg-center bg-cover"
            />
          </div>
        ))}
        <button
          className="z-20 fixed right-0 top-0 bottom-0 w-20 flex justify-center items-center text-primary bg-transparent hover:bg-slate-200/10 hover:text-secondary transition-colors duration-300 ease-in-out disabled:cursor-not-allowed"
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
