import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks } = useTasks();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Hacemos la función getTasks asíncrona
    const fetchData = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  },[]);

  if (!tasks || tasks.length === 0) return <h1>No tasks</h1>;

  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-32 mt-8">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TasksPage;
