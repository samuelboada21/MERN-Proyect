import { useEffect} from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {

  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  },[getTasks])

  if(tasks.length === 0) return (<h1>No tasks</h1>);

  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-32 mt-8">
      {
        tasks.map(task =>(
          <TaskCard task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TasksPage;
