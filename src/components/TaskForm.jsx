import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { createTask } = useContext(TaskContext);

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
    <div className="max-w-md">
      <form className="bg-neutral-900 p-10 mb-4" onSubmit={handlerSubmit}>
      <h1 className="text-2x1 font-bold text-white">Crea tu tarea</h1>
      <input
        placeholder="Escribe la tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={handlerChangeTitle}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe descripcion de la tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={handlerChangeDescrip}
        value={description}
      />
      <button className="bg-indigo-500 w-full px-3 py-1 rounded-md mt-4 text-white">Guardar</button>
    </form>
    </div>
  );
};

export default TaskForm;
