import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindInvoiceResponse } from 'src/interfaces/find-invoice';
import { RemoveInvoiceResponse } from 'src/interfaces/remove-invoice';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './schema/invoice.schema';

@Injectable()
export class InvoiceService {

  constructor(
    @InjectModel(Invoice.name) private readonly invoiceSchema: Model<Invoice>
  ) {

  }

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {

    const addedInvoice = await this.invoiceSchema.create({
      invoiceNo: createInvoiceDto.invoiceNo,
      client: createInvoiceDto.client,
      invoice: createInvoiceDto.invoice,
      exchange: createInvoiceDto.exchange
    });

    addedInvoice.save((err, data) => {
      if (err) {
        throw new BadRequestException();

      } else {

        return data;
      }

    });
    return addedInvoice;

  }

  async findAll(): Promise<Invoice[]> {
    const foundedInvoices = await this.invoiceSchema.find().exec();
    return foundedInvoices;
  }

  async findOne(value: string): Promise<Invoice | FindInvoiceResponse> {

    const foundedInvoice = await this.invoiceSchema.findOne({
      invoiceNo: new RegExp(value, "i")
    }).exec();

    if (!foundedInvoice) {
      return {
        isSucces: false,
        info: "Nie znaleziono faktury o podanum numerze"
      };
    } else {

      return foundedInvoice;
    }

  }


  async update(updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {

    const { id, invoiceNo, client, invoice, exchange } = updateInvoiceDto;
    const update = {
      invoiceNo,
      exchange,
      invoice,
      client,
    };

    const updatedInvoice = await this.invoiceSchema.findByIdAndUpdate({ _id: id }, update);

    updatedInvoice.save((err, data) => {
      if (err) {
        throw new BadRequestException();

      } else {

        return data;
      }

    });

    return updatedInvoice;

  }

  async remove(id: string): Promise<RemoveInvoiceResponse> {

    const removeInvoice = await this.invoiceSchema.findByIdAndDelete(id).exec();

    if (!removeInvoice) {
      return {
        isSucces: false,
        info: "Faktura nie została usunięta, spróbuj jeszcze raz"
      };

    } else {

    }
    return {
      isSucces: true,
      id: id,
      info: "Faktura została usunięta"
    };

  }
}
