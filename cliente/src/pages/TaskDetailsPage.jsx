import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import { useParams } from "react-router-dom";
import TaskDetailCard from "../components/TaskDetailsCard";

const TaskDetailPage = () => {
  const { getTask } = useTasks();
  const [task, setTask] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const taskData = await getTask(params.id);
        setTask(taskData);
      }
    }
    loadTask();
  }, [getTask, params.id]);

  return (
    <div className="flex items-center justify-center h-screen">
      {task ? (
        <TaskDetailCard task={task} />
      ) : (
        <p>Loading task details...</p>
      )}
    </div>
  );
};

export default TaskDetailPage;
