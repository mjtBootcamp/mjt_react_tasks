import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {

  const { createTask} = useContext(TaskContext)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerChangeTitle = (event) => setTitle(event.target.value);
  const handlerChangeDescrip = (event) => setDescription(event.target.value);

  const handlerSubmit = (event) => {
    event.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input 
        placeholder="Escribe la tarea" 
        onChange={handlerChangeTitle} 
        value={title}
        autoFocus
        />
        <textarea
          placeholder="Escribe descripcion de la tarea"
          onChange={handlerChangeDescrip}
          value= {description}
        />
        <button>Guardar</button>
      </form>
    </>
  );
};

export default TaskForm;
