import GoalItem from "@/components/Goals/GoalItem";
import Card from "@/components/ui/Card";
import UserProfile from "@/components/Goals/UserProfile";

const Goals = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Card title="Welcome" grid_item_class="second_item">
      <article className="w-full flex flex-col items-center mt-6 gap-y-6">
        <UserProfile />
        <ul className="w-full max-h-[300px] overflow-hidden p-2 flex flex-col gap-y-8 mt-4">
          {numbers.map((num) => (
            <GoalItem key={num} item={num} />
          ))}
        </ul>
      </article>
    </Card>
  );
};
export default Goals;
