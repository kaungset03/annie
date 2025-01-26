import { Circle } from "lucide-react";

const Goals = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="second_item w-full h-full bg-slate-200/30 rounded-xl font-sans p-4">
      <h2 className="text-xl tracking-[0.3em] font-medium text-center uppercase">
        Goals
      </h2>
      <ul className="w-full p-2 flex flex-col gap-y-8 mt-4 overscroll-y-scroll">
        {numbers.map((num) => (
          <li className="flex items-center gap-x-3 w-full" key={num}>
            <button className="text-secondary">
              <Circle size={25} />
            </button>
            <div className="border-b-2 border-secondary w-full p-[2px]">
              <p className="text-sm text-secondary font-medium">Lorem ipsum dolor sit.</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Goals;
