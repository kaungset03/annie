import "./grid.css";
import LofiPlayer from "@/components/LofiPlayer/LofiPlayer";
import Goals from "@/components/Goals/Goals";
import Quotes from "@/components/Quotes/Quotes";
import Calendar from "@/components/Calendar/Calendar";
import Gallery from "@/components/Gallery/Gallery";

const Home = () => {
  return (
    <main className="w-full max-w-[1600px] h-screen mx-auto grid_tem_area p-12">
      <LofiPlayer />
      <Goals />

      <Calendar />
      <Gallery />
      <Quotes />
    </main>
  );
};
export default Home;
