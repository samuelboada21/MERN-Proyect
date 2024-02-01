import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

/* eslint-disable react/prop-types */
function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 p-10 rounded-lg flex flex-col justify-between">
      <p className="text-xl font-bold overflow-hidden sm:whitespace-nowrap text-ellipsis">
        {task.title}
      </p>

      <p className="text-slate-300 overflow-hidden text-ellipsis line-clamp-2">
        {task.description}
      </p>

      <div>
        <p className="text-pink-200 font-semibold">
          {dayjs(task.date).utc().format("DD/MM/YYYY")}
        </p>
        <div className="flex gap-x-2 pt-5">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="
            bg-blue-500
            hover:bg-blue-600
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
