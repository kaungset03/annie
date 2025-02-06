"use client";

import { Music, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { formatDuration } from "@/helpers/helpers";
import { songs } from "@/constants/constants";
import VSlider from "@/components/LofiPlayer/VSlider";
import SoundEffect from "@/components/LofiPlayer/SoundEffect";

const MusicPlayer = () => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [currentSIndex, setCurrentSIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isStalled, setIsStalled] = useState(false);

  const handleCanPlay = () => {
    setIsStalled(false);
  };

  const handleStalled = () => {
    setIsStalled(true);
  };

  const handleVolumeChange = (value: number) => {
    if (playerRef.current) {
      playerRef.current.volume = value;
    }
    setVolume(value);
  };

  const playPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextSong = () => {
    const newIndex = (currentSIndex + 1) % songs.length;
    setCurrentSIndex(newIndex);
  };

  const handlePreviousSong = () => {
    const newIndex = (currentSIndex - 1 + songs.length) % songs.length;
    setCurrentSIndex(newIndex);
  };

  const handleLoadedMetadata = () => {
    if (playerRef.current) {
      setDuration(playerRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (playerRef.current) {
      setCurrentTime(playerRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src = songs[currentSIndex].url;
    }
  }, [currentSIndex]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="w-full flex flex-col items-center gap-y-8">
      <div className="flex items-center gap-x-6">
        <p className="font-medium flex gap-x-[2px]">
          <span className="min-w-14 text-center">
            {formatDuration(currentTime)}
          </span>
          <span>/</span>
          <span className="min-w-14 text-center">
            {formatDuration(duration)}
          </span>
        </p>
        <div>
          <h3 className="text-lg font-semibold">
            {songs[currentSIndex].title}
          </h3>
          <p className="text-sm font-medium text-slate-300">
            {songs[currentSIndex].artist}
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-around">
        <audio
          src={songs[currentSIndex].url}
          autoPlay={isPlaying}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNextSong}
          onCanPlay={handleCanPlay}
          onStalled={handleStalled}
          ref={playerRef}
        />
        <button
          className="border border-secondary text-primary p-3 rounded-full"
          onClick={handlePreviousSong}
        >
          <SkipBack size={20} />
        </button>
        <button
          className="border border-secondary text-primary p-3 rounded-full relative"
          onClick={playPause}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <div
            className={`${isStalled && isPlaying ? "border-t-primary" : "border-transparent"} absolute inset-0 w-full h-full border-t animate-spin rounded-full`}
          />
        </button>
        <button
          className="border border-secondary text-primary p-3 rounded-full"
          onClick={handleNextSong}
        >
          <SkipForward size={20} />
        </button>
      </div>
      <ul className="w-full flex flex-col gap-y-6">
        <li className="w-full grid grid-cols-6 items-center">
          <span className="text-primary text-sm font-medium">Music:</span>
          <VSlider volume={volume} onChange={handleVolumeChange} />
          <button className="ml-auto bg-background border-2 border-transparent text-primary p-2 rounded-md">
            <Music size={18} />
          </button>
        </li>
        <SoundEffect src="/eff-rain.mp3" title="Rain" />
        <SoundEffect src="/eff-fire.mp3" title="Fire" />
      </ul>
    </div>
  );
};
export default MusicPlayer;
