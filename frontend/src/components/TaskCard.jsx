import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

/* eslint-disable react/prop-types */
function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    
    <div className="bg-zinc-800 sm:p-10 p-5 rounded-lg flex flex-col justify-between sm:mb-0 mb-4 shadow-lg shadow-purple-500/10">
      <p className="text-xl font-bold overflow-hidden sm:whitespace-nowrap text-ellipsis">
        {task.title}
      </p>

      <p className="text-slate-300 overflow-hidden text-ellipsis sm:line-clamp-2">
        {task.description}
      </p>

      <div>
        <p className="text-pink-200 font-semibold">
          {dayjs(task.date).utc().format("DD/MM/YYYY")}
        </p>
        <div className="flex flex-wrap gap-y-2 gap-x-2 pt-5">
        <Link
            to={`/task-details/${task._id}`}
            className="
            bg-gradient-to-b from-purple-500 to-violet-700 hover:from-purple-600 hover:to-violet-800
            text-white
            px-4
            py-2
            rounded-md"
          >
            View
          </Link>
          <button
            className="bg-gradient-to-b from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="
            bg-gradient-to-b from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700
            text-white
            px-4
            py-2
            rounded-md"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
