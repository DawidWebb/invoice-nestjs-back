import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserDto } from './dto/get-user.dto';
import { GetUserValidationPipe } from 'src/pipes/get-user-validation.pipe';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  findOne(@Body(GetUserValidationPipe) getUserDto: GetUserDto) {
    return this.usersService.findOne(getUserDto);
  }

}
