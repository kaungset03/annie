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
  // return (
  //   <section className="first_item w-full h-full bg-slate-200/30 rounded-xl font-sans p-4">
  //     <h2 className="text-xl tracking-[0.3em] font-semibold text-center uppercase">
  //       Lofi Player
  //     </h2>
  //     <article className="w-2/3 h-full mx-auto flex flex-col justify-center items-center gap-y-12">
  //       <MusicNote />
  //       <MusicPlayer />
  //     </article>
  //   </section>
  // );
};
export default LofiPlayer;
