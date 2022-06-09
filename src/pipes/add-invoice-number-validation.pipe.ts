import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CreateInvoiceNumberDto } from 'src/invoice-number/dto/create-invoice-number.dto';



@Injectable()
export class AddInvoiceNumberValidationPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata): CreateInvoiceNumberDto {

        if (typeof value.month !== "string" || !value.month || value.month === "") {
            throw new BadRequestException(`Value of 'month' should to be no empty string`);
        } else if (typeof value.number !== "number" || !value.number || value.number <= 0) {
            throw new BadRequestException(`Value of 'number' should to be number > 0`);
        } else {
            return value;
        }

    }
}