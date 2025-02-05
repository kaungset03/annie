import MusicNote from "@/components/LofiPlayer/MusicNote";
import MusicPlayer from "@/components/LofiPlayer/MusicPlayer";
import Card from "@/components/ui/Card";

const LofiPlayer = () => {
  return (
    <Card title="Lofi Player" grid_item_class="first_item">
      <article className="w-2/3 h-full mx-auto flex flex-col justify-center items-center gap-y-12">
        <MusicNote />
        <MusicPlayer />
      </article>
    </Card>
  );
};
export default LofiPlayer;
