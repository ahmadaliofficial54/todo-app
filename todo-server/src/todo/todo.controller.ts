import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { ToDoDto } from '../app-types/dtos/todo/todo-dto';
import { ApiKeyAuthGuard } from '../auth/guard/apikey-auth.guard';
@Controller('todo')
@UseGuards(ApiKeyAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll(): Promise<ToDoDto[]> {
    return this.todoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ToDoDto> {
    return this.todoService.getById(id);
  }

  @Post()
  async create(@Body() todo: ToDoDto): Promise<ToDoDto> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todo: ToDoDto,
  ): Promise<ToDoDto> {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(id);
  }
}
