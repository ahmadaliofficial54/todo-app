import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ToDoDto } from '../app-types/dtos/todo/todo-dto';

@Injectable()
export class TodoService {
  private readonly todos: ToDoDto[] = [];

  async getAll(): Promise<ToDoDto[]> {
    return this.todos;
  }

  async getById(id: string): Promise<ToDoDto> {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  async create(todo: ToDoDto): Promise<ToDoDto> {
    const newTodo = { ...todo, id: uuidv4() };
    this.todos.push(newTodo);
    return newTodo;
  }

  async update(id: string, todo: ToDoDto): Promise<ToDoDto> {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    this.todos[index] = { ...todo, id };
    return this.todos[index];
  }

  async delete(id: string): Promise<void> {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    this.todos.splice(index, 1);
  }
}
