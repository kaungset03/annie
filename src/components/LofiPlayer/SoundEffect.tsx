import { Droplet, Flame } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import VSlider from "@/components/LofiPlayer/VSlider";

type SoundEffectProps = {
  src: string;
  title: "Rain" | "Fire";
};

const SoundEffect = ({ src, title }: SoundEffectProps) => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (value: number) => {
    if (playerRef.current) {
      playerRef.current.volume = value;
    }
    setVolume(value);
  };

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <li className="w-full grid grid-cols-6 items-center">
      <audio src={src} ref={playerRef} loop />
      <span className="text-primary text-sm font-medium">{title}:</span>
      <VSlider volume={volume} onChange={handleVolumeChange} />
      <button
        className={`${
          isPlaying
            ? "bg-background border-transparent"
            : "bg-transparent border-secondary"
        } ml-auto border-2 p-2 rounded-md text-primary`}
        onClick={handlePlayPause}
      >
        {title === "Rain" ? <Droplet size={18} /> : <Flame size={18} />}
      </button>
    </li>
  );
};
export default SoundEffect;
