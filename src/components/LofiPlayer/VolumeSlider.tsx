"use client";

import { useRef, useState } from "react";

type VolumeSliderProps = {
  current: number;
  onChange: (v: number) => void;
};

const VolumeSlider = ({ current, onChange }: VolumeSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateVolume(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateVolume(e);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    updateVolume(e);
  };

  const updateVolume = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newVolume = Math.min(Math.max(x / rect.width, 0), 1);
      onChange(newVolume);
    }
  };

  return (
    <div
      className="col-span-4 w-full h-[5px] bg-primary rounded-md relative cursor-pointer"
      ref={sliderRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="absolute left-0 top-0 bottom-0 rounded-l-md bg-secondary"
        style={{ width: `${current * 100}%` }}
      />
      <button
        className="absolute size-[14px] rounded-full bg-secondary top-1/2 transform -translate-y-1/2 left-[49%]"
        style={{ left: `${current * 99}%` }}
      />
    </div>
  );
};
export default VolumeSlider;
