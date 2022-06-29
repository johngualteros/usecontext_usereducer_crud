import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
export const TaskList = () => {
  const { tasks, deleteTask, toggleTask } = useContext(GlobalContext);
  return (
    <div className="grid place-items-center">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-blue-100 w-96 p-6 m-4 rounded-md shadow-md"
        >
          <h3 className="text-xl font-bold text-black">{task.title}</h3>
          <p className="text-lg text-zinc-700 my-6">{task.description}</p>
          <Link
            to={`/edit/${task.id}`}
            className="mx-2 bg-blue-400 text-black p-2 px-6 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteTask(task.id)}
            className="mx-2 bg-red-400 text-black p-2 px-6 rounded-lg shadow-lg hover:bg-red-600"
          >
            Delete
          </button>

          <button
            onClick={() => toggleTask(task.id)}
            className="mx-2 bg-purple-400 text-black p-2 px-6 rounded-lg shadow-lg hover:bg-purple-600"
          >
            {task.done ? "unDone" : "done"}
          </button>
        </div>
      ))}
    </div>
  );
};
