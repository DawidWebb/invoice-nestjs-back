import { Module } from '@nestjs/common';
import { InvoiceNumberService } from './invoice-number.service';
import { InvoiceNumberController } from './invoice-number.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceNumber, InvoiceNumberSchema } from './schema/invoice-number.schema';

@Module({
  imports: [MongooseModule.forFeature(([{ name: InvoiceNumber.name, schema: InvoiceNumberSchema }]))],
  controllers: [InvoiceNumberController],
  providers: [InvoiceNumberService]
})
export class InvoiceNumberModule {}
