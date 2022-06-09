import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindUserResponse } from 'src/interfaces/find-user';
import { GetUserDto } from './dto/get-user.dto';
import { Login } from './schema/user.schema';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel(Login.name) private readonly loginSchema: Model<Login>
  ) {}
  async findOne(getUserDto: GetUserDto): Promise<FindUserResponse> {

    const foundedUser = await this.loginSchema.findOne({ login: getUserDto.login });

    if (!foundedUser) {
      return {
        isSucces: false,
        info: `Użytkownik ${ getUserDto.login } nie istnieje`
      };
    } else if (foundedUser.password !== getUserDto.password) {
      return {
        isSucces: false,
        info: `Hasło lub login się nie zgadza`
      };
    } else {
      return {
        isSucces: true,
        id: foundedUser._id,
        login: foundedUser.login
      };
    }

  }

}
