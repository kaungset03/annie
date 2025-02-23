import Calendar from "@/components/Calendar/Calendar";
import Goals from "@/components/Goals/Goals";
import LofiPlayer from "@/components/LofiPlayer/LofiPlayer";
import Quotes from "@/components/Quotes/Quotes";
import Pomodoro from "@/components/Pomodoro/Pomodoro";
import "./grid.css";
import { Suspense } from "react";
// import ImageSlider from "@/components/Gallery/ImageSlider";

const Home = () => {
  return (
    <main className="w-full max-w-[1600px] h-screen mx-auto grid_tem_area p-6">
      {/* <ImageSlider /> */}
      <LofiPlayer />
      <Suspense fallback={<p>Loading...</p>}>
        <Goals />
      </Suspense>

      <Calendar />
      <Pomodoro />
      <Suspense fallback={<p>Loading...</p>}>
        <Quotes />
      </Suspense>
    </main>
  );
};
export default Home;
