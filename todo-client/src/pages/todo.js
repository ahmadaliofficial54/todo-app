import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllItems,
  addItem,
  updateToDoItem,
  deleteItemById,
} from "../store/todoSlice";
import "../assets/styles/todo.css";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";

function ToDo() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);
  const todos = useSelector((state) => state.toDoStore.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllTodos(todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (editTodoId) {
      const payload = {
        id: editTodoId,
        data: { title: todo },
      };
      dispatch(updateToDoItem(payload));
      setEditTodoId(null);
      setTodo("");
      return;
    } else if (todo !== "") {
      dispatch(addItem({ title: todo }));
      setTodo("");
    }
  };

  const deleteHandler = (id) => {
    dispatch(deleteItemById(id));
  };

  const editHandler = (item) => {
    setTodo(item.title);
    setEditTodoId(item.id);
  };
  return (
    <div className="todo-app">
      <div className="container">
        <h1>Todo List App</h1>

        <TodoForm
          handleSubmit={submitHandler}
          todo={todo}
          editId={editTodoId}
          setTodo={setTodo}
        />

        <TodoList
          todos={allTodos}
          handleEdit={editHandler}
          handleDelete={deleteHandler}
        />
      </div>
    </div>
  );
}

export default ToDo;
