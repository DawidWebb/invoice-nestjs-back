import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CreateInvoiceDto } from 'src/invoice/dto/create-invoice.dto';



@Injectable()
export class AddInvoiceValidationPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata): CreateInvoiceDto {

        if (typeof value.invoiceNo !== "string" || !value.invoiceNo || value.invoiceNo === "") {
            throw new BadRequestException(`Value of 'invoiceNo' should to be no empty string`);

        } else {
            return value;
        }

    }
}