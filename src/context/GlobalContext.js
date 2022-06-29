import { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";
import { v4 } from "uuid";
const initialState = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Task 1 description",
      done: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Task 2 description",
      done: false,
    },
  ],
};
export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4(),done:false } });
  };
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const updateTask = (task) => {
    dispatch({ type: "UPDATE_TASK", payload: task });
  };
  const toggleTask=(id)=>{
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }
  return (
    <GlobalContext.Provider
      value={{ ...state, addTask, deleteTask, updateTask,toggleTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
