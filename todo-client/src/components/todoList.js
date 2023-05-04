import React from "react";
import circleIcon from "../assets/images/circle.png";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <li className="singleTodo" key={todo.id}>
          <img src={circleIcon} alt="circle" />
          <span className="todoText">{todo.title}</span>
          <button onClick={() => handleEdit(todo)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
