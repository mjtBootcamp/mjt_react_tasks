import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask} = useContext(TaskContext)
  if (tasks.length === 0) <h1>"No hay tareas"</h1>;
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask}/>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
