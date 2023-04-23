import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className="text-white text-4x1 font-bold text-center">"No hay tareas"</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask}/>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
