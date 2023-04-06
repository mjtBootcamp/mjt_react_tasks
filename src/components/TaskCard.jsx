import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  
  const { deleteTask }= useContext(TaskContext)

  return (
    <>
      {task.title}
      <br />
      {task.description}
      <br />
      <button onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>
      <hr></hr>
      </>
  );
};

export default TaskCard;
