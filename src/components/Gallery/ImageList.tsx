"use client";

import Image from "next/image";
import ImageSlider from "./ImageSlider";
import { useState } from "react";

const ImageList = () => {
  const [imgIndex, setImgIndex] = useState<number | null>(null);
  const images = [
    "/bg0.webp",
    "/bg1.webp",
    "/bg2.webp",
    "/bg3.webp",
    "/bg4.webp",
    "/bg5.webp",
  ];

  const showSlider = (i: number) => {
    // scroll to top
    // disable scroll y
    window.scrollTo({ top: 0, behavior: "smooth" });
    setImgIndex(i);
  };

  const closeSlider = () => {
    // enable scroll y
    setImgIndex(null);
  };

  return (
    <>
      <ul className="w-full grid grid-cols-2 grid-rows-3 gap-3">
        {images.map((image, i) => (
          <li
            key={image}
            className="border border-primary rounded-md h-full aspect-video flex justify-center items-center cursor-pointer overflow-hidden"
            onClick={() => showSlider(i)}
          >
            <Image
              src={image}
              width={200}
              height={200}
              alt={`image-${i}`}
              className="w-full h-full scale-125 object-cover object-center rounded-md hover:scale-100 transition-transform duration-500 ease-in-out"
            />
          </li>
        ))}
      </ul>
      {imgIndex !== null && (
        <ImageSlider index={imgIndex} closeSlider={closeSlider} />
      )}
    </>
  );
};
export default ImageList;
