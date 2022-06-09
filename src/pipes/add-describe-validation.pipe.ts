import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CreateDescribeDto } from 'src/describes/dto/create-describe.dto';


@Injectable()
export class AddDescribeValidationPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata): CreateDescribeDto {

        if (typeof value.describeName !== "string" || !value.describeName || value.describeName === "") {
            throw new BadRequestException(`Value of 'describeName' should to be no empty string`);
        }

        return value.describeName;

    }
}