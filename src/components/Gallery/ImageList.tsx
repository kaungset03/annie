"use client";

import Image from "next/image";
import ImageSlider from "./ImageSlider";
import { useState } from "react";

const ImageList = () => {
  const [imgIndex, setImgIndex] = useState<number | null>(null);
  const images = [
    "/bg0.jpg",
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg3.jpg",
    "/bg4.jpg",
    "/bg5.jpg",
  ];

  const showSlider = (i: number) => {
    setImgIndex(i);
  };

  const closeSlider = () => {
    setImgIndex(null);
  }

  return (
    <>
      <ul className="w-full grid grid-cols-2 gap-3 flex-grow mt-6">
        {images.map((image, i) => (
          <li
            key={image}
            className="border border-secondary rounded-lg w-fit aspect-video flex justify-center items-center cursor-pointer"
            onClick={() => showSlider(i)}
          >
            <Image
              src={image}
              width={300}
              height={300}
              alt={`image-${i}`}
              className="w-full h-full object-cover rounded-md"
            />
          </li>
        ))}
      </ul>
      {imgIndex !== null && <ImageSlider index={imgIndex} closeSlider={closeSlider} />}
    </>
  );
};
export default ImageList;
