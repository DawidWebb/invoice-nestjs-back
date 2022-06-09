import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CreateDescribeDto } from 'src/describes/dto/create-describe.dto';


@Injectable()
export class IdValidationPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata): string {

        if (typeof value !== "string" || !value || value === "") {
            throw new BadRequestException(`Value of 'id' should to be no empty string`);
        }

        return value;

    }
}