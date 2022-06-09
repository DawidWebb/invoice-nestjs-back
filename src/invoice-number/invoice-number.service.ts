import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateInvoiceNumberResponse } from 'src/interfaces/update_invoice_number';
import { CreateInvoiceNumberDto } from './dto/create-invoice-number.dto';
import { UpdateInvoiceNumberDto } from './dto/update-invoice-number.dto';
import { InvoiceNumber } from './schema/invoice-number.schema';

@Injectable()
export class InvoiceNumberService {
  constructor(
    @InjectModel(InvoiceNumber.name) private readonly invoiceNumberSchema: Model<InvoiceNumber>
  ) {}
  async create(createInvoiceNumberDto: CreateInvoiceNumberDto) {
    const newInvoiceNumber = await this.invoiceNumberSchema.create({
      month: createInvoiceNumberDto.month,
      number: createInvoiceNumberDto.number
    });
    return newInvoiceNumber;
  }

  async findAll(): Promise<InvoiceNumber[]> {

    const foundedInvoiceNumbers = await this.invoiceNumberSchema.find().exec();
    if (!foundedInvoiceNumbers || !foundedInvoiceNumbers.length) {
      throw new NotFoundException();
    } else {
      return foundedInvoiceNumbers;
    }

  }

  async update(updateInvoiceNumberDto: UpdateInvoiceNumberDto): Promise<UpdateInvoiceNumberResponse> {

    const updatedInvoiceNumber = await this.invoiceNumberSchema.findByIdAndUpdate({ _id: updateInvoiceNumberDto._id }, updateInvoiceNumberDto).exec();

    if (updatedInvoiceNumber) {
      return {
        isSucces: true,
        info: "Invoice number updated"
      };
    } else {
      return {
        isSucces: false,
        info: "Sorry try again... some problems."
      };
    }
  }

}
