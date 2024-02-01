/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const TaskDetailCard = ({ task }) => {
  return (
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md shadow-lg shadow-purple-500/20">
        <h1 className="text-2xl font-bold text-ellipsis overflow-hidden">
          {task.title}
        </h1>
        <p className="text-slate-300 my-3">{task.description}</p>
        <p className="text-pink-200 font-semibold">
          {dayjs(task.date).utc().format("DD/MM/YYYY")}
        </p>
        <Link
          to="/tasks"
          className="bg-gradient-to-b from-purple-500 to-violet-700 hover:from-purple-600 hover:to-violet-800 px-3 py-2 rounded-md text-white mt-5 inline-block"
        >
          Back to Tasks
        </Link>
      </div>
  );
};

export default TaskDetailCard;
