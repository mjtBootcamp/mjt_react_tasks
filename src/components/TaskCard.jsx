import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  
  const { deleteTask }= useContext(TaskContext)

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-x1 font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-gray-200 px-2 py-1 text-black rounded-md mt-4" onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>
      </div>
  );
};

export default TaskCard;
