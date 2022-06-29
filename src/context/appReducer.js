export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "UPDATE_TASK":
      //   const updatedTask = action.payload;
      //   const updatedTasks = state.tasks.map((task) => {
      //     if (task.id === updatedTask.id) {
      //       task.title = updatedTask.title;
      //       task.description = updatedTask.description;
      //     }
      //     return task;
      //   });
      //   return {
      //     tasks: updatedTasks,
      //   };
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                title: action.payload.title,
                description: action.payload.description,
              }
            : task
        ),
      };
    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
  }
};
