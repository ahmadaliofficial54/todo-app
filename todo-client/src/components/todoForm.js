import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit"> {editId ? "Edit" : "Add Task"}</button>
    </form>
  );
};

export default TodoForm;
