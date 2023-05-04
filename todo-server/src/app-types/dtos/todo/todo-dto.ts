import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ToDoDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}
