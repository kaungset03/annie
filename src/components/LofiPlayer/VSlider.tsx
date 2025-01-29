import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

type VSliderProps = {
  volume: number;
  onChange: (v: number) => void;
};

const VSlider = ({ volume, onChange }: VSliderProps) => {
  const [local, setLocal] = useState(volume * 100);

  const handleComplete = (value: number) => {
    onChange(value / 100);
  };

  return (
    <Slider
      className="w-full col-span-4"
      defaultValue={local}
      styles={{
        rail: { backgroundColor: "#DFF6FF" },
        track: { backgroundColor: "#2A3D45" },
      }}
      onChange={(value) => setLocal(value as number)}
      onChangeComplete={(value) => handleComplete(value as number)}
    />
  );
};
export default VSlider;
