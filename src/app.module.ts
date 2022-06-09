import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONFIG } from "./_config/db";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DescribesModule } from './describes/describes.module';
import { InvoiceNumberModule } from './invoice-number/invoice-number.module';
import { InvoiceModule } from './invoice/invoice.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DescribesModule, MongooseModule.forRoot(DB_CONFIG), InvoiceNumberModule, InvoiceModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
