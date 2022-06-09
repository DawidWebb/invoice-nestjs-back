import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { InvoiceNumberService } from './invoice-number.service';
import { CreateInvoiceNumberDto } from './dto/create-invoice-number.dto';
import { UpdateInvoiceNumberDto } from './dto/update-invoice-number.dto';
import { AddInvoiceNumberValidationPipe } from 'src/pipes/add-invoice-number-validation.pipe';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';

@Controller('invoice-number')
export class InvoiceNumberController {
  constructor(private readonly invoiceNumberService: InvoiceNumberService) {}

  @Post('/')
  create(@Body(AddInvoiceNumberValidationPipe) createInvoiceNumberDto: CreateInvoiceNumberDto) {
    return this.invoiceNumberService.create(createInvoiceNumberDto);
  }

  @Get('/')
  findAll() {
    return this.invoiceNumberService.findAll();
  }

  @Put('/')
  update(@Body(AddInvoiceNumberValidationPipe) updateInvoiceNumberDto: UpdateInvoiceNumberDto) {
    return this.invoiceNumberService.update(updateInvoiceNumberDto);
  }

}
