import { Link } from "react-router-dom";
export const Heading = () => {
  return (
    <nav className="flex items-center justify-between p-6">
      <section>
        <h1 className="text-2xl font-bold text-blue-500">Todo List</h1>
      </section>
      <div>
        <Link
          to="/add"
          className="px-4 py-2 mr-3 font-bold text-white bg-blue-300 rounded hover:bg-blue-400"
        >
          Add Task
        </Link>
        <Link
          to="/"
          className="px-4 py-2 mr-3 font-bold text-white bg-blue-600 rounded hover:bg-blue-800"
        >
          Tasks
        </Link>
      </div>
    </nav>
  );
};
