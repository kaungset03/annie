import MusicNote from "@/components/LofiPlayer/MusicNote";
import MusicPlayer from "@/components/LofiPlayer/MusicPlayer";
import Card from "@/components/ui/Card";
import { createClientForServer } from "@/utils/supabase/server";

const getAllSongs = async () => {
  try {
    const supabase = await createClientForServer();
    const { data, error } = await supabase
      .from("songs")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      throw new Error("An error");
    }
    return data;
  } catch {
    throw new Error("An error");
  }
};

const LofiPlayer = async () => {
  const data = await getAllSongs();
  
  return (
    <Card title="Lofi Player" grid_item_class="first_item">
      <article className="w-2/3 min-h-fit mx-auto flex flex-col justify-center items-center gap-y-12">
        <MusicNote />
        <MusicPlayer songs={data} />
      </article>
    </Card>
  );
};
export default LofiPlayer;
