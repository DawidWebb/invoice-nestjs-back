import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { GetUserDto } from 'src/users/dto/get-user.dto';




@Injectable()
export class GetUserValidationPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata): GetUserDto {

        if (typeof value.login !== "string" || !value.login || value.login === "") {
            throw new BadRequestException(`Value of 'login' should to be no empty string`);

        } else if (typeof value.password !== "string" || !value.password || value.password === "") {
            throw new BadRequestException(`Value of 'password' should to be no empty string`);
        }
        else {
            return value;
        }

    }
}