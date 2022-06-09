import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Login, LoginSchema } from './schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature(([{ name: Login.name, schema: LoginSchema }]))],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
