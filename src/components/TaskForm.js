import { GlobalContext } from "../context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const TaskForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate("/");
  };
  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, tasks]);
  return (
    <div className="flex justify-center">
      <form
        className="bg-blue-500 w-96 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold text-light">
          {params.id ? "Edit Task" : "Add Task"}
        </h1>
        <div className="my-2">
          <label className="text-white text-2xl font-bold">Title</label>
          <input
            className="w-full p-2 outline-none rounded-md shadow-sm font-bold text-blue-900 focus:border border-blue-900"
            type="text"
            placeholder="Enter a Title"
            name="title"
            onChange={handleChange}
            value={task.title}
          />
        </div>
        <div className="my-2">
          <label className="text-white text-2xl font-bold">Description</label>
          <textarea
            className="w-full p-2 outline-none rounded-md shadow-sm font-bold text-blue-900 focus:border border-blue-900"
            type="text"
            placeholder="Enter a description"
            name="description"
            onChange={handleChange}
            value={task.description}
          />
        </div>
        <button className="w-full bg-black py-4 font-bold text-blue-600 rounded-md shadow-md">
          {params.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};
