import { useState, useEffect ,createContext } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const createTask = ({title, description, id}) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title,
        description,
      },
    ]);
  };
  const deleteTask = (taskID) => {
    setTasks(tasks.filter(task=>task.id!==taskID));
  }
  useEffect(() => setTasks(data), []);
  
  return (
    <TaskContext.Provider value = {{tasks, createTask, deleteTask}}>
        {props.children}
    </TaskContext.Provider>
  )
}
