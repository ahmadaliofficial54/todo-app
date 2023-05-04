import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchItems,
  createItem,
  updateItem,
  deleteItem,
} from "../service/service";

const initialState = {
  todos: [],
};

export const getAllItems = createAsyncThunk("todo/getAllItems", async () => {
  const response = await fetchItems();
  return response.data;
});

export const addItem = createAsyncThunk("todo/addItem", async (item) => {
  const response = await createItem(item);
  return response.data;
});

export const updateToDoItem = createAsyncThunk(
  "todo/updateToDoItem",
  async (item) => {
    const response = await updateItem(item.id, item.data);
    return response.data;
  }
);

export const deleteItemById = createAsyncThunk(
  "todo/deleteItemById",
  async (id) => {
    await deleteItem(id);
    return id;
  }
);

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllItems.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(addItem.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });

    builder.addCase(updateToDoItem.fulfilled, (state, action) => {
      const updatedItem = action.payload;
      const index = state.todos.findIndex((item) => item.id === updatedItem.id);
      state.todos[index] = updatedItem;
      // state.todos.put(action.payload);
    });

    builder.addCase(deleteItemById.fulfilled, (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    });
  },
});

export default toDoSlice.reducer;
