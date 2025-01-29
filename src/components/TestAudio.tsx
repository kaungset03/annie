import { useEffect, useRef, useState } from "react";

const audioSources = [
  "https://data.freetouse.com/music/tracks/822c7f80-232a-9dde-98a0-56e66e07fc92/file/mp3",
  "https://cdn.pixabay.com/audio/2024/11/02/audio_216f1af539.mp3",
];

const AudioPlayer = () => {
  const [currentSrc, setCurrentSrc] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleNextSrc = () => {
    const nextSrc = (currentSrc + 1) % audioSources.length;
    setCurrentSrc(nextSrc);
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSources[currentSrc];
      audioRef.current.play();
    }
  }, [currentSrc]);

  return (
    <div>
      <audio
        ref={audioRef}
        src={audioSources[currentSrc]}
        onEnded={handleNextSrc}
      />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};
export default AudioPlayer;
