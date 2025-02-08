import GoalItem from "@/components/Goals/GoalItem";
import Card from "@/components/ui/Card";
// import UserProfile from "@/components/Goals/UserProfile";

const Goals = () => {
  const numbers = [0, 1, 2, 3, 4];
  return (
    <Card title="Welcome" grid_item_class="second_item">
      <article className="w-full h-full flex flex-col items-center  mt-6 gap-y-6">
        {/* <UserProfile /> */}
        <ul className="w-full p-2 flex flex-col gap-y-8 mt-4">
          {numbers.map((num) => (
            <GoalItem key={num} item={num} />
          ))}
        </ul>
      </article>
    </Card>
  );
};
export default Goals;
