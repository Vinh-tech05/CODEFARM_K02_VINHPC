import { useSelector } from "react-redux";
import { selectTodoStats } from "../store/todoSelecter.js";

const TodoStatusBar = () => {
  const { total, completed, notCompleted } = useSelector(selectTodoStats);

  return (
    <div className="w-full bg-gray-100 border-b py-2 px-4 text-sm flex gap-6 font-medium">
      <span>Tổng: {total}</span>
      <span>Hoàn thành: {completed}</span>
      <span>Chưa hoàn thành: {notCompleted}</span>
    </div>
  );
};

export default TodoStatusBar;
