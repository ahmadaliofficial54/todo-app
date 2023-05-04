import axios from "../config/axios";

export const fetchItems = () => {
  return axios.get("/todo");
};

export const createItem = (item) => {
  return axios.post("/todo", item);
};

export const updateItem = (id, item) => {
  return axios.put(`/todo/${id}`, item);
};
export const deleteItem = (id) => {
  return axios.delete(`/todo/${id}`);
};
