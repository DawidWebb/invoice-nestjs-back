import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { AddInvoiceValidationPipe } from 'src/pipes/add-invoice-validation.pipe';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body(AddInvoiceValidationPipe) createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':value')
  findOne(@Param('value') value: string) {
    return this.invoiceService.findOne(value);
  }

  @Put()
  update(@Body(AddInvoiceValidationPipe) updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(id);
  }
}
