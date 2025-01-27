import Calendar from "../components/Calendar/Calendar";
import Gallery from "../components/Gallery/Gallery";
import Goals from "../components/Goals/Goals";
import LofiPlayer from "../components/LofiPlayer/LofiPlayer";
import Quotes from "../components/Quotes/Quotes";
import "./grid.css";
// import ImageSlider from "@/components/Gallery/ImageSlider";

const Home = () => {
  return (
    <main className="w-full max-w-[1600px] h-screen mx-auto grid_tem_area p-12">
      {/* <ImageSlider /> */}
      <LofiPlayer />
      <Goals />

      <Calendar />
      <Gallery />
      <Quotes />
    </main>
  );
};
export default Home;
