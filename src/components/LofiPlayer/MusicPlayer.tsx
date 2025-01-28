"use client";

import {
  Droplet,
  Flame,
  Music,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import VolumeSlider from "@/components/LofiPlayer/VolumeSlider";

const MusicPlayer = () => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const playPause = () => {
    if (playerRef.current) {
      if (playerRef.current.paused) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  };

  const handleVolumeChange = (v: number) => {
    setVolume(v);
    if (playerRef.current) {
      playerRef.current.volume = v;
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="w-full flex flex-col items-center gap-y-8">
      <div>
        <h3 className="text-xl font-semibold">love</h3>
        <p className="font-medium">Wave to Earth</p>
      </div>
      <div className="w-full flex items-center justify-around">
        <audio
          // src="https://data.freetouse.com/music/tracks/51ba83ee-55cb-0f12-e294-64d972f9981a/file/mp3"
          src="https://data.freetouse.com/music/tracks/3b51a997-3c4d-0db6-43df-35befe757eb3/file/mp3"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          ref={playerRef}
        />
        <button className="bg-secondary text-primary p-3 rounded-full">
          <SkipBack size={20} />
        </button>
        <button
          className="bg-secondary text-primary p-3 rounded-full"
          onClick={playPause}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button className="bg-secondary text-primary p-3 rounded-full">
          <SkipForward size={20} />
        </button>
      </div>
      <ul className="w-full flex flex-col gap-y-6">
        <li className="w-full grid grid-cols-6 items-center">
          <span className="text-primary text-sm font-medium">Music:</span>
          <VolumeSlider current={volume} onChange={handleVolumeChange} />
          <button className="ml-auto bg-secondary border-2 border-secondary text-primary p-2 rounded-md">
            <Music size={18} />
          </button>
        </li>
        <li className="w-full grid grid-cols-6 items-center">
          <span className="text-primary text-sm font-medium">Rain:</span>
          <VolumeSlider current={volume} onChange={handleVolumeChange} />
          <button className="ml-auto border-2 border-secondary text-secondary p-2 rounded-md">
            <Droplet size={18} />
          </button>
        </li>
        <li className="w-full grid grid-cols-6 items-center">
          <span className="text-primary text-sm font-medium">Flame:</span>
          <VolumeSlider current={volume} onChange={handleVolumeChange} />
          <button className="ml-auto border-2 border-secondary text-secondary p-2 rounded-md">
            <Flame size={18} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default MusicPlayer;
