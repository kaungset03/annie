import {
  Droplet,
  Flame,
  Music,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";
import VolumeSlider from "@/components/LofiPlayer/VolumeSlider";
import MusicNote from "@/components/LofiPlayer/MusicNote";

const LofiPlayer = () => {
  return (
    <section className="first_item w-full h-full bg-slate-200/30 rounded-xl font-sans p-4">
      <h2 className="text-xl tracking-[0.3em] font-medium text-center uppercase">
        Lofi Player
      </h2>
      <article className="w-2/3 h-full mx-auto flex flex-col justify-center items-center gap-y-12">
        <div className="flex flex-col items-center gap-y-3">
          <MusicNote />
          <div>
            <h3 className="text-xl font-semibold">love</h3>
            <p className="font-medium">Wave to Earth</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-around">
          <button className="bg-secondary text-primary p-3 rounded-full">
            <SkipBack size={20} />
          </button>
          <button className="bg-secondary text-primary p-3 rounded-full">
            <Pause size={20} />
          </button>
          <button className="bg-secondary text-primary p-3 rounded-full">
            <SkipForward size={20} />
          </button>
        </div>
        <ul className="w-full flex flex-col gap-y-6">
          <li className="w-full grid grid-cols-6 items-center">
            <span className="text-primary text-sm font-medium">Music:</span>
            <VolumeSlider />
            <button className="ml-auto bg-secondary text-primary p-2 rounded-md">
              <Music size={18} />
            </button>
          </li>
          <li className="w-full grid grid-cols-6 items-center">
            <span className="text-primary text-sm font-medium">Rain:</span>
            <VolumeSlider />
            <button className="ml-auto border-2 border-secondary text-secondary p-2 rounded-md">
              <Droplet size={18} />
            </button>
          </li>
          <li className="w-full grid grid-cols-6 items-center">
            <span className="text-primary text-sm font-medium">Flame:</span>
            <VolumeSlider />
            <button className="ml-auto border-2 border-secondary text-secondary p-2 rounded-md">
              <Flame size={18} />
            </button>
          </li>
        </ul>
      </article>
    </section>
  );
};
export default LofiPlayer;
