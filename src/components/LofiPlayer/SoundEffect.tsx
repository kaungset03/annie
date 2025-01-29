import { Droplet } from "lucide-react";

const SoundEffect = () => {
  return (
    <li className="w-full grid grid-cols-6 items-center">
      <span className="text-primary text-sm font-medium">Rain:</span>
      <button className="ml-auto border-2 border-secondary text-secondary p-2 rounded-md">
        <Droplet size={18} />
      </button>
    </li>
  );
};
export default SoundEffect;
