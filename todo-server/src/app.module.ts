import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ToDoModule } from './todo/todo.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, ToDoModule],
})
export class AppModule {}
