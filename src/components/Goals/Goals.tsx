import Image from "next/image";
import GoalItem from "@/components/Goals/GoalItem";
import Card from "@/components/ui/Card";

const Goals = () => {
  const numbers = [0, 1, 2, 3, 4, 5];
  return (
    <Card title="Welcome" grid_item_class="second_item">
      <article className="w-full flex flex-col items-center mt-6 gap-y-6">
        <div>
          <div className="w-1/2 aspect-square rounded-full mx-auto">
            <Image
              width={736}
              height={736}
              src={"/profile.jpg"}
              alt="Profile Picture"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
          <h3 className="text-center text-xl text-secondary font-semibold my-2">
            Kaung Set
          </h3>
        </div>
        <ul className="w-full p-2 flex flex-col gap-y-8 mt-4 overscroll-y-scroll">
          {numbers.map((num) => (
            <GoalItem key={num} item={num} />
          ))}
        </ul>
      </article>
    </Card>
  );
  // return (
  //   <section className="second_item w-full h-full bg-slate-200/30 rounded-xl font-sans p-4 overflow-y-auto">
  //     <h2 className="text-xl tracking-[0.3em] font-semibold text-center uppercase">
  //       Welcome
  //     </h2>
  //     <article className="w-full flex flex-col items-center mt-6 gap-y-6">
  //       <div>
  //         <div className="w-1/2 aspect-square rounded-full mx-auto">
  //           <Image
  //             width={736}
  //             height={736}
  //             src={"/profile.jpg"}
  //             alt="Profile Picture"
  //             className="w-full h-full rounded-full object-cover object-center"
  //           />
  //         </div>
  //         <h3 className="text-center text-xl text-secondary font-semibold my-2">Kaung Set</h3>
  //       </div>
  //       <ul className="w-full p-2 flex flex-col gap-y-8 mt-4 overscroll-y-scroll">
  //         {numbers.map((num) => (
  //           <GoalItem key={num} item={num} />
  //         ))}
  //       </ul>
  //     </article>
  //   </section>
  // );
};
export default Goals;
