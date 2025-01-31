import { CheckCircle, Circle } from "lucide-react";

type GoalItemProps = {
  item: number;
};

const GoalItem = ({ item }: GoalItemProps) => {
  return (
    <li className="flex items-center gap-x-3 w-full">
      <button className="text-secondary">
        {item % 2 === 0 ? <CheckCircle size={25} /> : <Circle size={25} />}
      </button>
      <div className="border-b-2 border-secondary w-full p-[2px]">
        <p className="text-sm text-secondary font-medium">
          Lorem ipsum dolor sit.
        </p>
      </div>
    </li>
  );
};
export default GoalItem;
